import React, { useState } from "react";
import { Trash2Icon, Minus, Plus } from "lucide-react";
import toast, { Toaster } from "react-hot-toast";
import { Link } from "react-router-dom";

const notify = () => toast("Here is your toast.");

const Cartcard = ({ product, onRemove }) => {
  const [quantity, setQuantity] = useState(product.quantity);
  const [msgh, setMsgh] = useState(0);

  const handleCart = () => {
    const my_cart = localStorage.getItem("Favourites");
    console.log()
    if (product) {
      if (msgh === 0) {
        toast.error("Remove to cart successfully");
        setMsgh(1);
        setTimeout(() => {
          setMsgh(0);
        }, 5000);
        removeFromCart(my_cart);
        handleMinus(my_cart)
      }
    }
  };

  const removeFromCart = (my_cart) => {
    if (my_cart) {
      const products = JSON.parse(my_cart);
      const filteredData = products.filter((fav) => fav.id !== product.id);
      localStorage.setItem("Favourites", JSON.stringify(filteredData));
      onRemove();
    }
  };

  const handleMinus = (my_cart) => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
      const products= JSON.parse(my_cart)
      const update_data = products.map((fav)=> fav.id === product.id)
      console.log(update_data)

    }
  };

  const handlePlus = () => {
    if (quantity < 5) {
      setQuantity((prevQuantity) => prevQuantity + 1);
    }
  };
  return (
    <div className="flex justify-center items-center">
      <Toaster />
      <div className="border-2 border-slate-100 w-full flex items-center justify-between gap-2 p-2 sm:p-3">
        <Link  to={`/product/${product.id}`} className="flex justify-between w-[80%] h-full items-center">
        <div className="flex sm:gap-2 gap-1">
          <img
            className="sm:w-[100px] sm:h-[100px] w-[50px] h-[50px] object-contain"
            src={product.images[0]}
            alt="img"
          />
          <div className="flex flex-col w-fit h-full">
            <h4 className="sm:text-xl text-[12px]">{product.title}</h4>
            <span className="sm:text-sm text-[8px] text-gray-600">Brand:{product.brand}</span>
          </div>

        </div>
          <span className="flex flex-col gap-2">
            <div className="text-red-600 sm:text-2xl text-[11px]" >Rs.{Math.floor(product.price * 290).toLocaleString()}</div>
            {product.oldPrice && (
              <div className="text-gray-500 sm:text-sm text-[8px]">
                <s>Rs.{product.oldPrice}</s>
              </div>
            )}
          </span>
        </Link>
        <div className="h-full flex  gap-3 sm:gap-10 items-center">
          <div className="quantity flex items-center gap-1 sm:gap-2">
            <span className="text-slate-500 text-[8px] sm:text-sm">Quantity:</span>
            <div className="flex gap-2">
              <button
                onClick={handleMinus}
                className={`sm:w-[35px] w-[15px] h-[15px] sm:h-[35px] flex items-center justify-center bg-slate-200 cursor-pointer ${
                  quantity === 1 ? "opacity-50 cursor-not-allowed" : ""
                }`}
                disabled={quantity === 1}
              >
                <Minus className="w-[12px] h-[12px] sm:w-[20px] sm:h-[20px]" />
              </button>
              <span className="sm:w-[35px] w-[15px] h-[15px] sm:h-[35px] flex items-center justify-center text-black bg-slate-200 sm:text-[15px] text-[10px]">
                {quantity}
              </span>
              <button
                onClick={handlePlus}
                className={`sm:w-[35px] w-[15px] h-[15px] sm:h-[35px] flex items-center justify-center bg-slate-200 cursor-pointer ${
                  quantity === 5 ? "opacity-50 cursor-not-allowed" : ""
                }`}
                disabled={quantity === 5}
              >
                <Plus className="w-[12px] h-[12px] sm:w-[20px] sm:h-[20px]" />
              </button>
            </div>
          </div>
          <span
            onClick={handleCart}
            className="h-full flex items-center text-red-500 cursor-pointer"
          >
            <Trash2Icon className="w-[12px] h-[12px] sm:w-[20px] sm:h-[20px]" />
          </span>
        </div>
      </div>  
    </div>
  );
};

export default Cartcard;
