import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
function CategoryDetails() {
  const { name } = useParams();
  const [details, setDetails] = useState([]);
  useEffect(() => {
    axios(`https://dummyjson.com/products/category/${name}`)
      .then((res) => res.data)
      .then((data) => {
        setDetails(data.products);
        console.log(data);
      });
  }, [name]);
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
      <h2 className="text-2xl font-bold text-gray-900">Kategori Ürünleri</h2>
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {details.map((product) => (
            <Link to={`/detail/${product.id}`}>
              <div key={product.id} className="group relative">
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

export default CategoryDetails;
