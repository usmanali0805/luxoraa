import { Link } from "react-router-dom";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";

const RowCard = ({ product }) => {
  return (
    <div className="flex w-full h-fit shadow ">
      <div className="border-2 border-slate-200 w-[100%] flex gap-2 sm:p-3 px-2  hover:bg-slate-200 ">
        <Link
          to={`/product/${product.id}`}
          className="flex w-[100%] h-full items-center justify-between gap-3 sm:gap-7 relative"
        >
          <div className="absolute left-0 top-2 px-2 py-1 bg-red-500 rounded-sm text-white text-[8px] sm:text-[15px]">
            {product.discountPercentage}%
          </div>
          <div className="flex gap-2">
            <img
              className="w-[80px] h-[80px] sm:w-[200px] sm:h-[200px] flex justify-center items-center text-[10px] object-contain"
              src={product.images[0]}
              alt="img"
            />
            <div className="flex flex-col w-fit sm:gap-2 h-full">
              <h4 className="text-[15px] sm:text-2xl">{product.title}</h4>
              <span className="text-[9px] sm:text-sm text-gray-600">
                Brand:{product.brand ? product.brand : " None"}
              </span>
              <span className="text-[7px] sm:text-xs text-gray-700 flex items-center gap-1">
                <span>
                  <Stack spacing={1}>
                    <Rating
                      name="half-rating-read"
                      defaultValue={product.rating}
                      precision={0.1}
                      size="small"
                      readOnly
                    />
                  </Stack>
                </span>
                <span>| Rating ({product.rating.toFixed(1)})</span>
              </span>
              <div className="text-[8px] sm:text-sm">{product.description}</div>
            </div>
          </div>
          <span className="flex flex-col gap-1 sm:gap-2">
            <div className="text-red-600 text-[15px] sm:text-2xl">
              Rs.{Math.floor(product.price * 290).toLocaleString()}
            </div>
            {product.price && (
              <div className="text-gray-500 text-[10px] sm:text-sm">
                <s>Rs.{product.price}</s>
              </div>
            )}
          </span>
        </Link>
        <div className="h-full flex gap-10 items-center">
          <div className="quantity flex items-center gap-2"></div>
        </div>
      </div>
    </div>
  );
};

export default RowCard;
