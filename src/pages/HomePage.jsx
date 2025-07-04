import React from "react";
import Sliders from "../components/Sliders";
import Categories from "../components/Categories";
import { useState, useEffect } from "react";
import Fashion from "../components/Fashion";
import Card from "../components/Card";
import { Link } from "react-router-dom";


const HomePage = () => {                          
  const [limit, setLimit] = useState(30)
  const [data, setData] = useState([]);
  const [products, setProducts] = useState([]);
  const fetchcategories = async () => {
    try {
      let response = await fetch('https://dummyjson.com/products/categories');
      let api_data = await response.json();
      setData(api_data || []);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchcategories();
  }, []);

  const fetchProduct = async () => {
    try {
      let response = await fetch(`https://dummyjson.com/products?limit=${limit}`);
      let api_data = await response.json();
      setProducts(api_data.products || []);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchProduct();
  }, [limit]);

  const GetProduct = () => {
    if(limit<210){
      setLimit( (PrevLimit)=> PrevLimit+20 )
    }
    else{
      setLimit(30)
    }
    
  }
  
  return (
    <div className="flex flex-col gap-10 justify-center items-center relative">
      <Sliders />
      <Fashion/>

      {/* Categories section */}
      <div className="Cartegories h-fit flex items-center flex-col w-full">
        <h3 className="sm:text-2xl font-semibold px-5  sm:px-10 py-4 w-full">Categories</h3>
        <div className="flex flex-wrap justify-center items-end  w-fit overflow-hidden">
          {data.length > 0 ? (
            data.map((slug,index) => {
              return (
                <div key={index}>
                  <Link to={`/search/${slug.slug}`}>
                  <Categories categorie={slug}  index={index} />
                  </Link>
                </div>
              );
            })
          ) : (
            <div>Loading...</div>
          )}
        </div>
      </div>

      {/* Card Section */}
      {products&&
      <div className="Cardcont flex flex-col justify-center items-center h-fit w-full">
        <h3 className="sm:text-2xl font-semibold sm:px-10 px-5 py-4 w-full">Just For You</h3>
        <div className="w-full flex justify-center">
          <div className="grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-3 gap-3 grid-cols-2 justify-center items-center  w-fit overflow-hidden">
            {products
              ? products.map((product ,index) => {
                  return (
                    <Link key={index} to={`product/${product.id}`}>
                      <Card product={product} />
                    </Link>
                  );
                })
              :''}
          </div>
        </div>
        <button onClick={GetProduct} className="sm:py-3 py-1 px-2 sm:text-[18px] text-[10px] font-semibold sm:px-12 mb-10 w-fit sm:border-2 border-1 border-slate-600 mt-10 cursor-pointer hover:bg-slate-200">
          {limit<200?"Load More":"Show Less"}
        </button>
      </div>
      }
    </div>
  );
};

export default HomePage;