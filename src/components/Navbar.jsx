import {
  ChevronDown,
  SearchIcon,
  ShoppingCart,
  X,
  User,
  MenuIcon,
  MoveLeftIcon,
  LogOut,
} from "lucide-react";
import { useEffect, useState } from "react";
import category from "./category";
import { Link, Navigate } from "react-router-dom";

const Navbar = ({ prpuser }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState("");
  const SlideRight = () => setIsOpen(true);
  const SlideLeft = () => setIsOpen(false);
  const [srchdwn, setSrchdwn] = useState(true);
  const [searchQuery, setSearchQuery] = useState([]);
  const [srchbar, setSrchbar] = useState(false);
  const [menubar, setMenubar] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);

  const getproduct = async () => {
    try {
      const response = await fetch(
        `https://dummyjson.com/products/search?q=${name}`
      );
      const products = await response.json();
      setSearchQuery(products.products || []);
    } catch (error) {
      console.log(error);
    }
  };
  const Handlename = (e) => {
    setName(e.target.value);
    setSrchdwn(true);
  };

  useEffect(() => {
    getproduct();
  }, [name]);
  console.log(prpuser);

  const Remove_User = () => {
    localStorage.removeItem("User");
    SlideLeft();
    navigate("/");
  }
  


  return (
    <header className="w-full ">
      <section className="flex justify-center items-center poppins-regular h-[2vh] bg-[#032a5d] text-blue-200 max-w-[100vw] text-[10px] sm:text-sm">
        Free shipping upto Rs.300
      </section>

      {/* Logo section */}
      <section className="flex justify-between w-full z-40 sticky top-0 left-0 items-center px-2 md:px-11 bg-[#032a5d] sm:h-[10vh] h-[7vh] ">
        <div className="flex gap-2 items-center">
          {/* Mobile menu  */}
          <MenuIcon
            onClick={() => {
              setMenubar(true);
            }}
            className="text-white md:hidden cursor-pointer w-[22px] h-[22px] sm:w-[25px] sm:h-[25px]"
          />
          {menubar && (
            <div className="w-full z-50 fixed left-0 top-0 h-[900px] p-2 bg-white animate-slide-in flex flex-col">
              <X
                onClick={() => {
                  setMenubar(false);
                }}
              />
              {category.map((category, index) => {
                const isOpen = activeIndex === index;

                return (
                  <div
                    key={index}
                    onClick={() => setActiveIndex(isOpen ? null : index)}
                    className="mendropdown relative w-full p-2 font-light flex flex-col items-start cursor-pointer hover:text-gray-500 group justify-start transition-all duration-300"
                  >
                    <span className="flex gap-1 justify-center w-full items-center">
                      <span className="Menbutton text-[19px]">
                        {category.name}
                      </span>
                      <ChevronDown className="w-[15px] h-[15px]" />
                    </span>

                    {isOpen && (
                      <div
                        className="drop_menu z-40 w-full top-[100%] h-fit min-h-10 text-white 
                      bg-[#032a5d] shadow transition-all duration-300 ease-in-out opacity-100"
                      >
                        <ul className="flex flex-col justify-center items-center sm:gap-3">
                          {category.subcategories.map((item, subIndex) => (
                            <Link
                              onClick={() => {
                                setMenubar(false);
                              }}
                              key={subIndex}
                              to={`/search/${item}`}
                            >
                              <li className="text-[17px] p-2 ">{item}</li>
                            </Link>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )}
          <Link to={"/"}>
            <img
              className="sm:h-12 h-8 cursor-pointer"
              src="/logo.jpg"
              alt="logo"
            />
          </Link>
        </div>
        <div className="input w-[40%] h-fit relative hidden  md:flex items-center justify-center">
          <input
            onChange={Handlename}
            className="bg-white  sm:w-[80%] sm:text-[16px] text-[10px] sm:p-3 p-1 poppins-regular focus:outline-none"
            type="text"
            placeholder="Search in Luxora"
          />
          <Link to={`/search/${name}`}>
            <button
              onClick={() => setSrchdwn(false)}
              className="p-1 sm:p-3 flex justify-center items-center cursor-pointer bg-blue-200"
            >
              <SearchIcon className="text-[#032a5d] w-[15px] sm:w-[25px] sm:h-[25px] h-[15px]" />
            </button>
          </Link>

          {/*Input Dropdown*/}
          {name && srchdwn && (
            <div className="w-full max-h-[40vh] min-h-fit hidden md:block bg-white absolute left-0 top-[100%] px-2 sm:px-5 ">
              <div className="sm:h-10 h-5 flex items-center justify-between ">
                <span className="sm:text-sm text-[10px] text-gray-400">
                  Related Search
                </span>
              </div>
              <ul className="sm:py-2 py-1 w-full flex flex-col sm:gap-3 gap-1">
                {searchQuery.length > 0
                  ? searchQuery.map((item, index) => (
                      <Link key={index} to={`/product/${item.id}`}>
                        <li
                          className="text-[12px]"
                          onClick={() => setSrchdwn(false)}
                        >
                          {item.title}
                        </li>
                      </Link>
                    ))
                  : ""}
              </ul>
            </div>
          )}
        </div>
        <div className="h-full gap-2 md:gap-4 justify-end flex items-center relative">
          <Link to={"/cart"}>
            <ShoppingCart className="text-white cursor-pointer w-[22px] h-[22px] sm:w-[25px] sm:h-[25px]" />
          </Link>
          {prpuser.length <= 0 ? (
            <Link to={"/login"}>
              <button className="border-white border-1 sm:border-2 cursor-pointer text-[10px] sm:text-sm font-regular text-white rounded-sm sm:py-2 py-1 sm:px-3 px-2 hover:bg-blue-700 transition duration-300">
                Login
              </button>
            </Link>
          ) : (
            <div
              onClick={SlideRight}
              className="h-full justify-end flex items-center relative"
            >
              <div className="p-3 hidden md:block bg-blue-500 rounded-full">
                <User className="text-white" />
              </div>
            </div>
          )}
          <div className="h-full justify-end flex items-center relative">
            <div
              onClick={() => {
                setSrchbar(true);
              }}
              className="p-3 block md:hidden rounded-full"
            >
              <SearchIcon className="text-white cursor-pointer w-[22px] h-[22px] sm:w-[25px] sm:h-[25px]" />
            </div>
          </div>

          {/* Mobile Search */}
          {srchbar && (
            <section className="w-full h-[900px] p-3 top-0 left-0 fixed z-50 bg-white">
              <div className="flex flex-col">
                <div className="flex justify-center items-center gap-1  border-black border-1">
                  <div
                    onClick={() => {
                      setSrchbar(false);
                    }}
                    className="p-1  rounded-sm  mb-[5px] w-fit"
                  >
                    <MoveLeftIcon className="w-[22px] h-[22px]" />
                  </div>
                  <input
                    onChange={Handlename}
                    className="bg-white w-full h-full  sm:p-3 p-1 poppins-regular focus:outline-none"
                    type="text"
                    placeholder="Search in Luxora"
                  />
                  <Link to={`/search/${name}`}>
                    <button
                      onClick={() => setSrchdwn(false)}
                      className="p-1 text-white flex rounded-sm justify-center items-center cursor-pointer "
                    >
                      {/* Search */}
                      <SearchIcon className="text-[#032a5d] w-[25px] :h-[25px] " />
                    </button>
                  </Link>
                </div>
                {name && srchdwn && (
                  <div className="w-full max-h-[40vh] min-h-fit bg-white px-2 sm:px-5 ">
                    <div className="sm:h-10 h-5 flex items-center justify-between ">
                      <span className="sm:text-sm text-[10px] text-gray-400">
                        Related Search
                      </span>
                    </div>
                    <ul className="sm:py-2 py-1 w-full flex flex-col overflow-y-scroll sm:gap-3 gap-1">
                      {searchQuery.length > 0
                        ? searchQuery.map((item, index) => (
                            <Link key={index} to={`/search/${item.id}`}>
                              <li
                                className="text-[12px]"
                                onClick={() => {
                                  setSrchdwn(false);
                                  setSrchbar(false);
                                }}
                              >
                                {item.title}
                              </li>
                            </Link>
                          ))
                        : ""}
                    </ul>
                  </div>
                )}
              </div>
            </section>
          )}

          <div
            className={`min-h-20 w-[400px] h-full bg-white flex flex-col  fixed z-50 top-0 right-0 transition-transform duration-200
            ${isOpen ? "translate-x-0 " : "translate-x-full opacity-0"}`}
          >
            <div className="heading  w-full relative z-80  flex flex-col gap-2 justify-center items-center">
              <div
                onClick={SlideLeft}
                className=" rounded-full p-3  cursor-pointer absolute left-1 top-1  translate-0.5 "
              >
                <X className=" text-black" />
              </div>
              <div className="flex gap-3 flex-col w-full p-2 pt-8 pb-8 border-slate-300 border-b-2 items-center justify-center">
                <div className="p-3 bg-blue-500 rounded-full mt-4">
                  <User size={80} className="text-white" />
                </div>
                <div className="text-4xl font-normal">{prpuser.firstName}</div>
              </div>
              {/* Main link */}
              <div className="flex  pt-[20px] flex-col gap-5 items-center justify-center">
                <Link to={""}>
                  <p className="text-xl hover:text-slate-700 cursor-pointer">
                    Home
                  </p>
                </Link>
                <Link to={"/cart"}>
                  <p className="text-xl hover:text-slate-700 cursor-pointer">
                    Cart
                  </p>
                </Link>
                <Link to={"/location"}>
                  <p className="text-xl hover:text-slate-700 cursor-pointer">
                    Location
                  </p>
                </Link>
                <Link to={"/storetiming"}>
                  <p className="text-xl hover:text-slate-700 cursor-pointer">
                    Timing
                  </p>
                </Link>
                <Link to={"/policy"}>
                  <p className="text-xl hover:text-slate-700 cursor-pointer">
                    Privat Policy
                  </p>
                </Link>
              </div>
              <div className=" h-[350px]  flex justify-end items-end w-full p-4">
                <button onClick={Remove_User} className="flex p-2 h-fit hover:bg-slate-300 transition-all duration-200 bg-slate-200 rounded-lg cursor-pointer gap-2 w-full justify-center items-center">
                  <LogOut />
                  Logout
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Drop Down */}
      <section className="md:h-[4vh] hidden h-[2vh] w-full md:flex sm:hidden items-center justify-start px-2 gap-2 sm:px-11 md:gap-15 sm:gap-4 bg-[#032a5d]">
        {category.map((category, index) => {
          return (
            <ul
              key={index}
              className="mendropdown relative w-fit h-[2vh] sm:h-[4vh] font-light flex items-center text-white cursor-pointer hover:text-[#d5e5fa] group"
            >
              <li className="Menbutton text-[9px] sm:text-[9px] md:text-[15px]">
                {category.name}
              </li>
              <li>
                <ChevronDown className="sm:w-[15px] sm:h-[15px] w-[8px] h-[8px]" />
              </li>
              <div className="drop_menu hidden group-hover:block z-40 px-2 absolute top-[100%] left-0 w-[100px] sm:w-[200px] h-fit min-h-10 bg-white sm:p-6 text-[#032a5d] shadow transition-all duration-300 ease-in-out opacity-0 group-hover:opacity-100">
                <ul className="flex flex-col sm:gap-3">
                  {category.subcategories.map((item, index) => (
                    <Link key={index} to={`/search/${item}`}>
                      <li className="text-[10px] sm:text-[17px] p-1">{item}</li>
                    </Link>
                  ))}
                </ul>
              </div>
            </ul>
          );
        })}
      </section>
    </header>
  );
};

export default Navbar;
