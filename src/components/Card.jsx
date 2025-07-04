import React from 'react'
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';

const Card = ({product}) => {
  return (
   
    <div className='sm:w-[230px] sm:h-[290px] w-[150px] h-[220px] border-1 relative trans border-slate-200 cursor-pointer shadow flex flex-col hover:bg-slate-200 '>
      <img className='w-full h-[60%] object-contain' src={product.images[0]} alt={product.title} />
      <div className='absolute sm:left-4 left-2 top-[52%]  sm:px-2 px-1 py-1 bg-red-500 rounded-sm text-white sm:text-[11px] text-[8px]' >{product.discountPercentage}%</div>
      <div className='sm:p-3 p-2 flex flex-col'>
        <div className='sm:text-[16px] text-[10px] font-semibold poppins-light'>{product.title}</div>
        <div className='flex sm:gap-2 gap-1 items-center'>
          <div className='sm:text-lg text-[12px] poppins-light text-red-600'>Rs. {Math.floor(product.price * 290).toLocaleString()}</div>
          <div className='sm:text-xs text-[8px] text-gray-700'><s>Rs.{Math.floor((product.price / (1 - product.discountPercentage / 100)) * 290).toLocaleString()}</s></div>
        </div>
          <span className="sm:text-xs text-[8px] text-gray-700 flex items-center gap-1">
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
            <span>
            | Rating ({product.rating.toFixed(1)})
            </span>
            </span>
      </div>
    </div>
  )
}

export default Card
