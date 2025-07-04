
import { Link } from "react-router-dom";

const Fashion = () => {
  return (
    <div className="w-[90vw] h-fit flex sm:gap-10 gap-5 justify-center items-center">
      <div className="left w-[48%] gap-4 sm:h-[90vh] flex flex-col justify-between ">
        <div className="cursor-pointer w-full h-[60%] relative">
          <img
            className="w-full h-full object-cover object-top"
            src="https://i.pinimg.com/474x/89/63/52/8963524761b32bb9167b43a36d619b7c.jpg"
            alt=""
          />
          <Link to={"/search/skin-care"}>
            <div className="absolute top-0 left-0 z-30 w-[100%] h-[100%] flex flex-col items-start justify-end sm:p-8 p-2 text-white sm:gap-2">
              <div className="sm:text-4xl text-[15px] font-semibold drop-shadow-xl shadow-black poppins-regular">
                Festive
              </div>
              <div className="sm:text-3xl text-[12px] font-semibold poppins-regular">
                Collection 2025
              </div>
              <button className="sm:text-xl text-[10px] border-b-2">
                Shop Now
              </button>
            </div>
          </Link>
        </div>
        <div className="cursor-pointer trans w-full bg-slate-200 h-[35%] overflow-hidden justify-end relative flex items-center hover:bg-slate-300">
          <img
            className=" object-contain sm:h-full w-[80%] "
            src="/glasses.png"
            alt=""
          />
          <Link to={"/search/sunglasses"}>
            <div className="absolute top-0 left-0 z-30 w-[100%] h-[100%] flex flex-col items-start justify-end sm:p-8 p-2 sm:gap-2">
              <div className="sm:text-4xl text-[15px] font-semibold drop-shadow-xl shadow-black poppins-regular">
                Campus
              </div>
              <div className="sm:text-3xl text-[12px] font-semibold poppins-regular">
                Style
              </div>
              <button className="sm:text-xl text-[10px] border-b-2">
                Shop Now
              </button>
            </div>
          </Link>
        </div>
      </div>
      <div className="right w-[48%] sm:h-[90vh] gap-4 flex flex-col justify-between ">
        <div className="cursor-pointer trans w-full bg-slate-200 h-[35%] justify-end relative flex items-center sm:pr-10 hover:bg-slate-300">
          <img
            className=" sm:w-fit w-[80%] h-full  object-contain object-center "
            src="/shose.png"
            alt=""
          />
          <Link to={"/search/mens-shoes"}>
            <div className="absolute top-0 left-0 z-30 w-[100%] h-[100%] flex flex-col items-start justify-end sm:p-8 p-2 sm:gap-2">
              <div className="sm:text-4xl text-[15px] font-semibold drop-shadow-xl shadow-black poppins-regular">
                Campus
              </div>
              <div className="sm:text-3xl text-[12px] font-semibold poppins-regular">
                Style
              </div>
              <button className="sm:text-xl text-[10px] border-b-2">
                Shop Now
              </button>
            </div>
          </Link>
        </div>
        <div className="cursor-pointer trans flex items-center justify-end w-full h-[60%] relative bg-slate-200 hover:bg-slate-300">
          <img
            className="px-5 sm:h-full h-[80%] object-contain object-top"
            src="/tops.png"
            alt=""
          />
          <Link to={"/search/tops"}>
            <div className="absolute top-0 left-0 z-30 w-[100%] h-[100%] flex flex-col items-start justify-end sm:p-8 p-2 sm:gap-2">
              <div className="sm:text-4xl text-[15px] font-semibold drop-shadow-xl shadow-black poppins-regular">
                Fashion
              </div>
              <div className="sm:text-3xl text-[12px] font-semibold poppins-regular">
                Discovery
              </div>
              <button className="sm:text-xl text-[10px] border-b-2">
                Shop Now
              </button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Fashion;
