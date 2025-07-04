import React,{useState} from 'react'


const Categories = ({categorie,index}) => {
  const [img, setImg] = useState( [
        {
          name: "Beauty & Skincare",
          url: "https://i.pinimg.com/236x/f1/46/3b/f1463b9f3bec9b0877b4d395227ae4bd.jpg",
        },
        {
          name: "Fragrances",
          url: "https://i.pinimg.com/474x/19/b2/ec/19b2ec2170566da3023ea42fe5127026.jpg",
        },
        {
          name: "Home & Living",
          url: "https://i.pinimg.com/236x/d1/60/8e/d1608e7a6968c96de70c543482c088d6.jpg",
        },
        {
          name: "grocery",
          url: "https://i.pinimg.com/236x/a8/ca/0f/a8ca0fd6894db828c12767afb4f3e2f1.jpg",
        },
        {
          name: "home decore",
          url: "https://i.pinimg.com/236x/e7/ee/2e/e7ee2e8cdadf6d6a9d8d4ac1233a5917.jpg",
        },
        {
          name: "Kitchen Accessories",
          url: "https://i.pinimg.com/236x/b2/cd/c6/b2cdc60f1a7878850f6bc3fa6a6d6a6b.jpg",
        },
        {
          name: "laptop",
          url: "https://i.pinimg.com/236x/47/fa/75/47fa756dce183252f08acf6f488fef33.jpg",
        },
        {
          name: "tshirt",
          url: "https://i.pinimg.com/236x/ce/9c/b3/ce9cb30b8a8079b1604a3d2d10773f1a.jpg",
        },
        {
          name: "Footwear",
          url: "https://i.pinimg.com/474x/31/c6/7e/31c67e9ea9a0c328cc960d33826f5c4c.jpg",
        },
        {
          name: "Watches & Accessories",
          url: "https://i.pinimg.com/236x/0c/e8/29/0ce8299f7b1c845d575f949b244ea238.jpg",
        },
        {
          name: "Sports & Fitness",
          url: "https://i.pinimg.com/236x/b3/64/96/b36496725654d852d5f744813c2979c5.jpg",
        },
        {
          name: "Bags & Luggage",
          url: "https://i.pinimg.com/236x/20/02/a7/2002a73a900169ac83f37c1c1e63a86d.jpg",
        },
        {
          name: "Kids & Toys",
          url: "https://i.pinimg.com/236x/bf/74/d5/bf74d5d27c054c4aedd8c6492b279379.jpg",
        },
        {
          name: "Gaming",
          url: "https://i.pinimg.com/236x/cc/45/52/cc45529b2e7dbbd519bcb4f462c4ac55.jpg",
        },
        {
          name: "Books & Stationery",
          url: "https://i.pinimg.com/236x/88/bc/4d/88bc4de8e0c540bc1c1b9e3afd981832.jpg",
        },
        {
          name: "glasses",
          url: "https://i.pinimg.com/236x/78/14/84/7814841761a19cfb5eb22614e8829f14.jpg",
        },
        {
          name: "tablet",
          url: "https://i.pinimg.com/236x/4d/a5/c1/4da5c12ff0d3b83348b11d9237a6c42c.jpg",
        },
        {
          name: "tops",
          url: "https://i.pinimg.com/236x/2c/63/cd/2c63cd73e582af47936a9f5fbca0bf4c.jpg",
        },
        {
          name: "vehicals",
          url: "https://i.pinimg.com/236x/72/2c/7b/722c7b2f02f906c72530f6c78d83f7fa.jpg",
        },
        {
          name: "bags",
          url: "https://i.pinimg.com/236x/7e/2a/1d/7e2a1d0d0b3313ea3817115c8bd9445c.jpg",
        },
        {
          name: "women dresses",
          url: "https://i.pinimg.com/236x/01/4c/1a/014c1aa9f9f51401d956d9e2401d183f.jpg",
        },
        {
          name: "Jewelry",
          url: "https://i.pinimg.com/236x/5a/7f/24/5a7f2420ee0c1fe5aa4036eaf0a082c9.jpg",
        },
        {
          name: "women shoes",
          url: "https://i.pinimg.com/474x/98/40/64/98406426afad989b73c36cec7386a028.jpg",
        },
        {
          name: "women watches",
          url: "https://i.pinimg.com/236x/d4/06/8e/d4068ee4d18da83512ad53334f4ede96.jpg",
        },
      ] 
  )
  return (
    <div className='sm:w-[150px] w-[60px] relative shadow  sm:h-[150px] h-[60px] flex flex-col gap-1 items-center cursor-pointer  overflow-hidden justify-center hover:shadow'>
      <div className='absolute w-full h-full bg-slate-900 opacity-0 hover:opacity-15'></div>
      <div className="img w-[70%] h-[70%] min-h-[70%] min-w-[70%] overflow-hidden">
        <img className='w-full h-full object-cover rounded-sm poppins-regular' src={img[index].url} alt="img" />
      </div>
        <h5 className='text-black sm:text-[12px] text-[5px] font-regular poppins-regular'>{categorie.name}</h5>
    </div>
  )
}

export default Categories
