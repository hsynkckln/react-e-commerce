import { useCommerce } from "../context/CommerceProvider";
import { Link } from "react-router-dom";

// const products = [
//   {
//     id: 1,
//     name: "Basic Tee",
//     href: "#",
//     imageSrc:
//       "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
//     imageAlt: "Front of men's Basic Tee in black.",
//     price: "$35",
//     color: "Black",
//   },
//   {
//     id: 1,
//     name: "Basic Tee",
//     href: "#",
//     imageSrc:
//       "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
//     imageAlt: "Front of men's Basic Tee in black.",
//     price: "$35",
//     color: "Black",
//   },
//   {
//     id: 1,
//     name: "Basic Tee",
//     href: "#",
//     imageSrc:
//       "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
//     imageAlt: "Front of men's Basic Tee in black.",
//     price: "$35",
//     color: "Black",
//   },
//   {
//     id: 1,
//     name: "Basic Tee",
//     href: "#",
//     imageSrc:
//       "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
//     imageAlt: "Front of men's Basic Tee in black.",
//     price: "$35",
//     color: "Black",
//   },
// ];

export default function ProductList() {
  const { product } = useCommerce();
  console.log(product);

  return (
    // <div className="container">
    //   <div className="row mt-5">
    //     {
    //       product.map((item,key)=>(
    //         <div key={key} className="col-sm-4 mt-3">
    //           <div className="card">
    //             <div className="card-body">
    //               <Link to={`/detail/${item.id}`}>
    //                 <img style={{ marginLeft: "30%" }} width="40%"  src={item.images[0]}></img>
    //               </Link>
    //               <div className='font-weight-bold text-center mt-2'>{(item.title).substring(0, 30)}...</div>
    //               <div className='text-center mt-2'>{(item.description).substring(0, 45)}....</div>
    //               <div className='text-center font-weight-bold mt-2'>{item.price} $</div>

    //             </div>
    //             <div className="card-footer" style={{ border: "none", backgroundColor: "white" }}>
    //               <button  style={{ backgroundColor: "#6610f2" }} className='btn-lg btn-block text-center text-white'>Sepete Ekle</button>
    //             </div>
    //           </div>
    //         </div>
    //       ))
    //     }
    //   </div>

    // </div>

    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          Kullanıcıların ilgilendikleri
        </h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {product.map((product, key) => (
            <Link to={`/detail/${product.id}`}>
              <div key={key} className="group relative">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                  <img
                    src={product.images[0]}
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.brand}
                    </h3>
                  </div>
                  <div className="text-sm font-medium text-gray-900">
                    {product.price}$
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
