import { useState, useEffect } from "react";
import React from "react";
import toast, { Toaster } from "react-hot-toast";
const notify = () => toast("Here is your toast.");

const CheckOut = () => {
  const [local, setLocal] = useState([]);
  const [amount, setAmount] = useState(0);
  const [value,setValue] = useState()

  const getitems = () => {
    const data = JSON.parse(localStorage.getItem("Favourites")) || [];
    if (data) {
      setLocal(data);
      let total = 0;
      data.forEach((product) => {
        total += Math.floor(product.price * 290);
      });
      setAmount(total);
    }
  };

  const HandleFavourites = () => {
    if (local.length>0) {
      if(value){
      console.log(local)
      toast.success("Your Order Fully Placed");
      localStorage.removeItem("Favourites");    
      setLocal([]);
      setAmount(0)

    }else{
      toast.error("Please fill the field");
    }} else {
      toast.error("Please add product");
    }
  };

  

  useEffect(() => {
    getitems();
  }, []);


  return (
    <div className="w-full min-h-[80vh] flex px-2 gap-5 mt-5 ml-7">
      <Toaster />
      <section className="flex flex-col bg-slate-100 w-[55%] h-fit p-5 rounded-md ">
        <h4 className="text-2xl py-3">Delivery Information</h4>
        <div className="infos">
          <form
            className="grid grid-cols-1  bg-slate-100 sm:grid-cols-2 gap-7"
            action={postMessage}
          >
            <label className="gap-1 flex flex-col" htmlFor="name">
              <div className="text-[13px] text-gray-500">Full name</div>
              <input
                className="border-1 rounded-sm border-gray-400 w-full p-2  focus:outline-none "
                type="text"
                typeof="name"
                placeholder="Enter Your full name"
              />
            </label>

            <label className="gap-1 flex flex-col" htmlFor="Province">
              <div className="text-[13px] text-gray-500">Province</div>
              <select
                id="Province"
                name="Province"
                aria-label="Province"
                className="col-start-1 row-start-1 border-1 border-gray-400 w-full focus:outline-none appearance-none rounded-sm p-2 text-base text-gray-500 placeholder:text-gray-400 sm:text-sm/6"
              >
                <option value="1">Punjab</option>
                <option value="2">Sindh</option>
                <option value="3">KPK</option>
                <option value="4">Balochistan</option>
                <option value="5">Gilgit</option>
              </select>
            </label>

            <label className="gap-1 flex flex-col" htmlFor="phone number">
              <div className="text-[13px] text-gray-500">Phone no</div>
              <input
                onChange={(e)=>{setValue(e.target.value)}}
                className="border-1 rounded-sm border-gray-400 w-full p-2  focus:outline-none "
                type="text"
                typeof="email"
                placeholder="Enter Your phone no"
                value={value}
              />
            </label>

            <label className="gap-1 flex flex-col" htmlFor="Province">
              <div className="text-[13px] text-gray-500">City</div>
              <select
                id="city"
                name="city"
                aria-label="city"
                className="col-start-1 row-start-1 border-1 border-gray-400 w-full focus:outline-none appearance-none rounded-sm p-2 text-base text-gray-500 placeholder:text-gray-400 sm:text-sm/6"
              >
                <option value="1">Karachi</option>
                <option value="2">Hyderabad</option>
                <option value="3">Larkana</option>
                <option value="4">Sakhar</option>
                <option value="5">Dado</option>
              </select>
            </label>

            <label className="gap-1 flex flex-col" htmlFor="name">
              <div className="text-[13px] text-gray-500">
                Building/ House No /Floor /Street
              </div>
              <input
                className="border-1 rounded-sm border-gray-400 w-full p-2  focus:outline-none "
                type="text"
                typeof="address"
                placeholder="Please enter"
              />
            </label>

            <label className="gap-1 flex flex-col" htmlFor="name">
              <div className="text-[13px] text-gray-500">Address</div>
              <input
                className="border-1 rounded-sm border-gray-400 w-full p-2  focus:outline-none "
                type="text"
                typeof="address"
                placeholder="For example: House# 123, Street# 123, ABC Road, Near XYZ"
              />
            </label>

            <label className="gap-1 flex flex-col" htmlFor="name">
              <div className="text-[13px] text-gray-500">
                Colony / Suburb / Locality / Landmark
              </div>
              <input
                className="border-1 rounded-sm border-gray-400 w-full p-2  focus:outline-none "
                type="text"
                typeof="address"
                placeholder="Please enter"
              />
            </label>
          </form>
        </div>
      </section>
      <section className=" w-[40%] h-fit p-5 flex flex-col gap-4 bg-slate-100 rounded-md ">
        <div className="flex flex-col gap-2 border-b-1 border-gray-200 pb-3 ">
          <h2 className="text-2xl py-1">Order Summary:</h2>
          <div className="flex justify-between">
            <div className="text-md">items total{`(${local.length || 0})`}</div>
            <div>Rs:{amount.toLocaleString()}</div>
          </div>
          <div className="flex justify-between">
            <div className="text-md">Delivery fee</div>
            <div>Rs:135</div>
          </div>
        </div>
        <div className="flex justify-between">
          <span>Total:</span>
          <span className="text-blue-700 text-lg ">
            Rs.{(amount + 135).toLocaleString()}
          </span>
        </div>
        <button
          onClick={() => {
            HandleFavourites();
          }}
          className="py-2 bg-blue-200 text-white hover:bg-blue-700 transition-all cursor-pointer"
        >
          Pay to Proceed
        </button>
      </section>
    </div>
  );
};

export default CheckOut;
