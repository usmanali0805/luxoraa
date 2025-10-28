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
    <div className="w-full min-h-[80vh] flex flex-col lg:flex-row px-2 gap-5 mt-5 lg:ml-7">
  <Toaster />

  {/* Left Section - Form */}
  <section className="flex flex-col bg-slate-100 w-full lg:w-[55%] h-fit p-5 rounded-md">
    <h4 className="text-2xl py-3">Delivery Information</h4>

    <div className="infos">
      <form
        className="grid grid-cols-1 sm:grid-cols-2 gap-7 bg-slate-100"
        action={postMessage}
      >
        {/* Full Name */}
        <label className="gap-1 flex flex-col" htmlFor="name">
          <div className="text-[13px] text-gray-500">Full name</div>
          <input
            className="border rounded-sm border-gray-400 w-full p-2 focus:outline-none"
            type="text"
            placeholder="Enter Your full name"
          />
        </label>

        {/* Province */}
        <label className="gap-1 flex flex-col" htmlFor="Province">
          <div className="text-[13px] text-gray-500">Province</div>
          <select
            id="Province"
            name="Province"
            aria-label="Province"
            className="border border-gray-400 w-full focus:outline-none appearance-none rounded-sm p-2 text-base text-gray-500 placeholder:text-gray-400 sm:text-sm"
          >
            <option value="1">Punjab</option>
            <option value="2">Sindh</option>
            <option value="3">KPK</option>
            <option value="4">Balochistan</option>
            <option value="5">Gilgit</option>
          </select>
        </label>

        {/* Phone Number */}
        <label className="gap-1 flex flex-col" htmlFor="phone">
          <div className="text-[13px] text-gray-500">Phone no</div>
          <input
            onChange={(e) => setValue(e.target.value)}
            className="border rounded-sm border-gray-400 w-full p-2 focus:outline-none"
            type="text"
            placeholder="Enter Your phone no"
            value={value}
          />
        </label>

        {/* City */}
        <label className="gap-1 flex flex-col" htmlFor="city">
          <div className="text-[13px] text-gray-500">City</div>
          <select
            id="city"
            name="city"
            aria-label="city"
            className="border border-gray-400 w-full focus:outline-none appearance-none rounded-sm p-2 text-base text-gray-500 placeholder:text-gray-400 sm:text-sm"
          >
            <option value="1">Karachi</option>
            <option value="2">Hyderabad</option>
            <option value="3">Larkana</option>
            <option value="4">Sukkur</option>
            <option value="5">Dadu</option>
          </select>
        </label>

        {/* Building / Street */}
        <label className="gap-1 flex flex-col" htmlFor="building">
          <div className="text-[13px] text-gray-500">
            Building / House No / Floor / Street
          </div>
          <input
            className="border rounded-sm border-gray-400 w-full p-2 focus:outline-none"
            type="text"
            placeholder="Please enter"
          />
        </label>

        {/* Address */}
        <label className="gap-1 flex flex-col" htmlFor="address">
          <div className="text-[13px] text-gray-500">Address</div>
          <input
            className="border rounded-sm border-gray-400 w-full p-2 focus:outline-none"
            type="text"
            placeholder="For example: House# 123, Street# 123, ABC Road, Near XYZ"
          />
        </label>

        {/* Colony / Landmark */}
        <label className="gap-1 flex flex-col" htmlFor="landmark">
          <div className="text-[13px] text-gray-500">
            Colony / Suburb / Locality / Landmark
          </div>
          <input
            className="border rounded-sm border-gray-400 w-full p-2 focus:outline-none"
            type="text"
            placeholder="Please enter"
          />
        </label>
      </form>
    </div>
  </section>

  {/* Right Section - Order Summary */}
  <section className="w-full lg:w-[40%] h-fit p-5 flex flex-col gap-4 bg-slate-100 rounded-md">
    <div className="flex flex-col gap-2 border-b border-gray-200 pb-3">
      <h2 className="text-2xl py-1">Order Summary:</h2>
      <div className="flex justify-between text-sm sm:text-base">
        <div>Items total ({local.length || 0})</div>
        <div>Rs: {amount.toLocaleString()}</div>
      </div>
      <div className="flex justify-between text-sm sm:text-base">
        <div>Delivery fee</div>
        <div>Rs: 135</div>
      </div>
    </div>

    <div className="flex justify-between text-sm sm:text-base">
      <span>Total:</span>
      <span className="text-blue-700 text-lg">
        Rs. {(amount + 135).toLocaleString()}
      </span>
    </div>

    <button
      onClick={HandleFavourites}
      className="py-2 bg-blue-600 text-white hover:bg-blue-700 rounded-md transition-all cursor-pointer"
    >
      Pay to Proceed
    </button>
  </section>
</div>

  );
};

export default CheckOut;
