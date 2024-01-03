import { useCommerce } from "../context/CommerceProvider";
import { Link } from "react-router-dom";
import { MdFavorite } from "react-icons/md";

export default function ProductList() {
  const { product } = useCommerce();
  console.log(product);

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          Kullanıcıların ilgilendikleri
        </h2>
        
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {product.map((product, key) => (
            <div key={key} className=" group relative">
              <MdFavorite className=" absolute  ml-60  text-gray-200 active:text-orange-400 z-50" size={42} style={{border:"3px solid white",background:"white",borderRadius:"2rem"}}/>
              <Link style={{ textDecoration: "none" }} to={`/detail/${product.id}`}>
                
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                  
                    <img
                      src={product.images[0]}
                      className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                    />
                  
                </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-lg text-gray-700">
                    <span aria-hidden="true" className="absolute inset-0 " />
                    {product.brand}
                  </h3>
                </div>
                <div className="text-sm font-medium text-gray-900">
                  {product.price}$
                </div>
              </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
