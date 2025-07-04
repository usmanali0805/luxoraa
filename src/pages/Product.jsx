import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Minus, Plus, ChevronRight, ChevronLeft } from "lucide-react";

import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import { Link } from "react-router-dom";
import { SlideshowLightbox } from "lightbox.js-react";

import toast, { Toaster } from "react-hot-toast";
import RelateProduct from "../components/RelateProduct";

const notify = () => toast("Here is your toast.");

const Products = () => {
  const [quantity, setQuantity] = useState(1);
  const [img, setImg] = useState(0);
  const [data, setData] = useState(null);
  const [msgh, setMsgh] = useState(0);
  const [search, setSearch] = useState(false);
  const [curr, setCurr] = useState(0);

  const { id } = useParams();
  const Fetchpdt = async () => {
    try {
      const response = await fetch(`https://dummyjson.com/products/${id}`);
      const api_data = await response.json();
      setData(api_data || []);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    Fetchpdt();
    window.scrollTo(0, 0);
  }, [id]);

  const AddProductToFavourite = () => {
    if (!data) return;
    if (msgh === 0) {
      setMsgh(1);
      setTimeout(() => {
        setMsgh(0);
      }, 5000);
    }
    const my_favourites = localStorage.getItem("Favourites");
    if (my_favourites) {
      const f_data = JSON.parse(my_favourites);
      const index = f_data.findIndex((fav) => fav.id == data.id);
      const isAllreadyAdd = f_data.some((fav) => fav.id == data.id);
      if (!isAllreadyAdd) {
        f_data.push({ ...data, quantity });
        localStorage.setItem("Favourites", JSON.stringify(f_data));
        toast.success("Added to cart successfully");
      } else {
        f_data[index].quantity += quantity;
        localStorage.setItem("Favourites", JSON.stringify(f_data));
        toast.success("Quantity updated in cart");
      }
    } else {
      const newArr = [{ ...data, quantity }];
      localStorage.setItem("Favourites", JSON.stringify(newArr));
      toast.success("Added to cart successfully");
    }
  };

  const Handleminus = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };
  const Handleplus = () => {
    if (quantity < 5) {
      setQuantity((prevQuantity) => prevQuantity + 1);
    }
  };
  const Handleimg = (index) => {
    setImg(index);
  };

  const previous = () => {
    setCurr((curr) => (curr === 0 ? data.images.length - 1 : curr - 1));
  };
  const next = () => {
    setCurr((curr) => (curr === data.images.length - 1 ? 0 : curr + 1));
  };

  const NameInitial = ({ name }) => {
    const initial = name ? name.charAt(0).toUpperCase() : "";
  };

  return (
    <div className="min-h-[50vh] h-fit w-full sm:flex justify-center items-center relative">
      <Toaster />
      {data && (
        <div className="flex flex-col gap-5 py-4 sm:py-10">
          {/* Breadcrumb */}
          <div className="w-full h-[4vh] flex items-center px-6">
            <ChevronRight className="w-[12px] h-[12px] sm:w-[15px] sm:h-[15px] text-blue-600 " />
            <span className="text-[12px] sm:text-[15px] text-blue-600">
              Category
            </span>
            <ChevronRight className="w-[12px] h-[12px] sm:w-[15px] sm:h-[15px] text-blue-600" />
            <Link to={`/search/${data.category}`}>
              <span className="text-[12px] sm:text-[15px] text-blue-600 cursor-pointer">
                {data.category}
              </span>
            </Link>
          </div>

          {/* Product Section */}
          <div className="w-full px-3 gap-3  sm:h-fit flex flex-col sm:flex-row justify-evenly">
            {/* Image */}
            <div className="img w-full bg-slate-200 sm:w-[40%] h-full relative flex ">
              <img
                className="w-full h-full object-contain border border-slate-300"
                src={data.images[img]}
                alt=""
              />
            </div>

            {/* Product Info */}
            <div className="info w-full sm:w-[48%] h-fit flex">
              <div className="sm:flex gap-2 w-full">
                {/* Thumbnail */}
                <div className=" flex sm:justify-start  justify-center pt-3 sm:flex-col gap-2">
                  {data.images.length > 0 &&
                    data.images.map((image, index) => (
                      <img
                        key={index}
                        onClick={() => Handleimg(index)}
                        className="w-[8vw] h-20 cursor-pointer bg-slate-300 object-contain"
                        src={image}
                        alt=""
                      />
                    ))}
                </div>

                {/* Details */}
                <div className="sm:w-[88%] w-full px-2 sm:px-5 flex flex-col gap-2 sm:gap-4 py-5 sm:py-10">
                  <h1 className="sm:text-4xl text-2xl">{data.title}</h1>

                  <div className="flex justify-between">
                    <span className="text-[12px] sm:text-[15px]">
                      Rating: {data.rating}
                    </span>
                    <Stack spacing={1}>
                      <Rating
                        name="half-rating-read"
                        defaultValue={data.rating}
                        precision={0.5}
                        readOnly
                      />
                    </Stack>
                  </div>

                  <div className="flex gap-5 w-full items-center">
                    <span className="sm:text-3xl text-xl text-red-600">
                      Rs.{Math.floor(data.price * 290).toLocaleString()}
                    </span>
                    <s className="text-[12px] sm:text-[15px]">
                      Rs.
                      {Math.floor(
                        (data.price / (1 - data.discountPercentage / 100)) * 290
                      ).toLocaleString()}
                    </s>
                  </div>

                  <div className="text-regular flex items-center gap-2">
                    <span className="text-slate-500 sm:text-[15px] text-[12px]">
                      Brand:
                    </span>
                    <span className="text-blue-600 sm:text-[15px] text-[12px] font-semibold">
                      {data.brand}
                    </span>
                  </div>

                  {/* Quantity */}
                  <div className="quantity flex items-center gap-2">
                    <span className="text-slate-500 sm:text-[15px] text-[12px]">
                      Quantity:
                    </span>
                    <div className="flex gap-2">
                      <span
                        onClick={Handleminus}
                        className={`w-[35px] h-[35px] flex items-center justify-center bg-slate-200 cursor-pointer ${
                          quantity === 1 ? "opacity-50 cursor-not-allowed" : ""
                        }`}
                      >
                        <Minus />
                      </span>
                      <span className="w-[35px] h-[35px]  flex items-center justify-center bg-slate-200">
                        {quantity}
                      </span>
                      <span
                        onClick={Handleplus}
                        className={`w-[35px] h-[35px] flex items-center justify-center bg-slate-200 cursor-pointer ${
                          quantity === 5 ? "opacity-50 cursor-not-allowed" : ""
                        }`}
                      >
                        <Plus />
                      </span>
                    </div>
                  </div>

                  <div className="sm:text-[15px] text-[12px] text-slate-500">
                    Stock: {data.stock}
                  </div>

                  <button
                    onClick={AddProductToFavourite}
                    className="w-full h-12 text-white bg-[#032a5d] hover:bg-[#013881]"
                  >
                    Add to Bag
                  </button>

                  <div className="sm:text-[15px] text-[10px]">
                    {data.description}
                  </div>

                  <ul className="list-disc px-3 text-sm">
                    <li className="sm:text-[15px] text-[10px]">
                      sku: {data.sku}
                    </li>
                    <li className="sm:text-[15px] text-[10px]">
                      {data.shippingInformation}
                    </li>
                    <li className="sm:text-[15px] text-[10px]">
                      {data.returnPolicy}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Reviews */}
          <div className="reviews w-full px-5 py-5 sm:px-10 sm:py-10 flex flex-col border-t border-slate-300">
            <h1 className="sm:text-3xl text-xl pb-5">Product Reviews</h1>
            {data.reviews.length > 0 ? (
              data.reviews.map((review, index) => (
                <div
                  key={index}
                  className="flex flex-col px-2 sm:px-3 gap-1 py-2 sm:py-6 w-full"
                >
                  <div className="flex items-center gap-2">
                    <div className="sm:w-[60px] sm:h-[60px] w-[30px] h-[30px] flex items-center justify-center text-white sm:text-3xl text-xl bg-blue-900 rounded-full font-semibold">
                      {review.reviewerName?.charAt(0).toUpperCase()}
                    </div>
                    <div className="flex flex-col">
                      <span className="sm:text-[22px] text-[15px] font-semibold">
                        {review.reviewerName}
                      </span>
                      <div className="sm:text-[12px] text-[10px] text-slate-500">
                        {review.reviewerEmail}
                      </div>
                    </div>
                  </div>
                  <Stack spacing={1} className="py-3">
                    <Rating
                      name="review-rating"
                      defaultValue={review.rating}
                      precision={0.1}
                      readOnly
                    />
                  </Stack>
                  <div className="sm:text-xl text-[15px] font-semibold">
                    {review.comment}
                  </div>
                </div>
              ))
            ) : (
              <div className="w-full h-20 flex items-center justify-center">
                No reviews
              </div>
            )}
          </div>

          {/* Additional Images */}
          <div className="w-full flex flex-col items-center px-6">
            <div className="w-[90%] flex flex-col items-center">
              {data.images.map((img, i) => (
                <img key={i} src={img} alt={`Product ${i}`} />
              ))}
            </div>
          </div>

          {/* Related Section */}
          <div className="w-full">
            {search && <RelateProduct category={data.category} />}
            <div className="w-full flex justify-center py-10">
              <button
                onClick={() => setSearch(true)}
                className="sm:px-10 px-5 sm:py-4 py-2 font-semibold text-[#032a5d] border-2 border-[#032a5d] hover:bg-slate-200 sm:text-[15px] text-[12px]"
              >
                {search ? (
                  <Link to={`/search/${data.category}`}>Go to Search</Link>
                ) : (
                  "See More Product"
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Products;
