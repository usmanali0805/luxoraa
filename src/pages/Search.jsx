import React from "react";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { LayoutGrid, StretchHorizontal } from "lucide-react";
import Card from "../components/Card";
import RowCard from "../components/RowCard";

const Search = () => {
  const param = useParams();
  const [products, setProducts] = useState([]);
  const [ctrlcard, setCtrlcard] = useState(false);
  const FectchProducts = async () => {
    try {
      const response = await fetch(
        `https://dummyjson.com/products/category/${param.name}`
      );
      const data = await response.json();
      setProducts(data.products || []);
    } catch (error) {
      console.log("Error fetcging products:", error);
    }
  };

  const HandleSort = async () => {
    console.log("chal gaya");
    try {
      const response = await fetch(
        `https://dummyjson.com/products/category/${param.name}?sortBy=rating&order=asc`
      );
      const data = await response.json();
      setProducts(data.products || []);
      console.log(products);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (param && param.name) {
      FectchProducts();
      window.scrollTo(0, 0);
    }
  }, [param]);

  return (
    <div className="text-black sm:px-10 px-5 min-h-[70vh]">
      <div className="Cardcont flex flex-col justify-center items-center h-fit w-full">
        <h3 className="sm:text-2xl sm:px-10 font-semibold py-2 sm:py-4 w-full">
          {param.name}
        </h3>
        <div className="w-full ">
          {products?.length && (
            <div className=" flex justify-between">
              <div className="sm:text-sm text-[10px]">
                <span className="font-semibold sm:text-xl text-[10px]">
                  {products.length}{" "}
                </span>
                Search Result found for {param.name}
              </div>
              <div className="flex items-center gap-2 md:gap-4">
                <div className="w-fit flex items-center gap-1 md:gap-2">
                  <div className="flex items-center text-[10px] md:text-[15px]">Sort by:</div>
                  <label className="md:gap-3 flex gap-2" htmlFor="Province">
                    <select
                      onChange={(e) => HandleSort(e.target.value)}
                      id="Province"
                      name="Province"
                      aria-label="Province"
                      className="col-start-1 row-start-1 border-1 border-gray-400 w-full focus:outline-none appearance-none rounded-sm text-[8px] p-1 md:p-2 h-fit text-base text-gray-500 placeholder:text-gray-400 sm:text-sm/6"
                    >
                      <option value="rating">Sort by Rating</option>
                      <option value="price">Sort by Price</option>
                      <option value="title">Sort by title</option>
                    </select>
                  </label>
                </div>
                <div className="flex gap-1  md:gap-3">
                  <span className="sm:text-[17px] text-[10px]">View:</span>
                  <LayoutGrid
                    onClick={() => setCtrlcard(false)}
                    fill="black"
                    className="cursor-pointer sm:w-[25px] sm:h-[25px] h-[15px] w-[15px]"
                  />
                  <StretchHorizontal
                    onClick={() => setCtrlcard(true)}
                    fill="black"
                    className="cursor-pointer sm:w-[25px] sm:h-[25px] h-[15px] w-[15px]"
                  />
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="w-full flex">
          <div
            className={`${
              ctrlcard
                ? "flex flex-col"
                : "grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 grid-cols-2 justify-center items-center "
            } gap-3  w-full py-5 overflow-hidden`}
          >
            {products
              ? products.map((product, index) => {
                  return (
                    <Link key={index} to={`product/${product.id}`}>
                      {ctrlcard ? (
                        <RowCard product={product} />
                      ) : (
                        <Card product={product} />
                      )}
                    </Link>
                  );
                })
              : ""}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
