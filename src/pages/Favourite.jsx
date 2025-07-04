import React, { useState, useEffect } from "react";
import { Trash2Icon } from "lucide-react";
import Cartcard from "../components/Cartcard";
import { Link } from "react-router-dom";

const Favourite = () => {
  const [local, setLocal] = useState([]);
  const [quantity, setQuantity] = useState(0);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("Favourites")) || [];
    if (data) {
      setLocal(data);
    }
    const totalQuantity = data.reduce(
      (total, item) => total + (item.quantity || 1),
      0
    );
    setQuantity(totalQuantity);
  }, []);

  const HandleClear = () => {
    localStorage.removeItem("Favourites");
    setLocal([]);
  };

  const onRemove = (product) => {
    const new_local = local.filter((products) => products.id !== product.id);
    setLocal(new_local);
    localStorage.setItem("Favourites", JSON.stringify(new_local));
  };

  return (
    <div className="text-black min-h-screen p-5 sm:p-10 flex flex-col">
      <div className="flex justify-between sm:py-7 items-center w-full">
        <h2 className="sm:text-2xl text-xl">Carts</h2>
        {local.length>0&&<button
          className={`text-gray-500 flex items-center justify-center gap-1 cursor-pointer hover:${
            local.length > 0 ? "text-[#032a5d]" : ""
          }`}
        >
          <span>
            <Trash2Icon className="w-[15px] h-[15px] sm:w[20px] sm:h-[20px]" />
          </span>
          <span onClick={HandleClear} className="sm:text-md text-[12px]">
            Delete
          </span>
        </button>}
      </div>
      <div className="flex flex-col gap-2 justify-center w-full h-fit ">
        {local.length > 0 ? (
          local.map((product, index) => (
            <Cartcard
              key={index}
              product={product}
              onRemove={() => onRemove(product)}
            />
          ))
        ) : (
          <div className="min-h-[20vh] flex items-center justify-center text-4xl ">
            Cart is Empty
          </div>
        )}
      </div>
      <button className={`bg-[#95c3fe] sm:px-6 px-3 py-1 text-white rounded-sm sm:py-3 sm:text-2xl w-fit fixed bottom-4 left-5 hover:text-slate-200 hover:bg-[#032a5d] transition duration-150 cursor-pointer`}>
        {local.length>0?<Link to={"/Checkout"}>
        Check Out
        </Link>:
        "Check Out"
        }
        </button>
    </div>
  );
};

export default Favourite;
