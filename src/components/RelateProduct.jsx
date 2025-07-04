import {useState ,useEffect} from 'react'
import Card from './Card';
import { Link } from 'react-router-dom';

const RelateProduct = ({category}) => {
      const [products, setProducts] = useState([]);
    
      const FectchProducts = async () => {
        try {
          const response = await fetch(
            `https://dummyjson.com/products/category/${category}?limit=6`
          );
          const data = await response.json();
          setProducts(data.products || []);
        } catch (error) {
          console.log("Error fetcging products:", error);
        }
      };
        useEffect(() => {
          if (category) {
            FectchProducts();
          }
        }, []);
  return (
     <div className="text-black h-fit py-5 sm:py-10">
          <div className="Cardcont flex flex-col justify-center items-center h-fit w-full">
            <h3 className="text-xl sm:text-2xl px-5 sm:px-10 py-2 sm:py-4 w-full">Related Search</h3>
            <div className="w-full px-5 sm:px-10">
            </div>
            <div className="w-full flex justify-center">
              <div className="grid grid-cols-2 lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 gap-3 justify-center items-center  w-fit overflow-hidden">
                {products
                  ? products.map((product,index) => {
                      return (
                        <Link key={index} to={`/product/${product.id}`}>
                          <Card product={product} />
                        </Link>
                      );
                    })
                  : ""}
              </div>
            </div>
          </div>
        </div>
  )
}

export default RelateProduct
