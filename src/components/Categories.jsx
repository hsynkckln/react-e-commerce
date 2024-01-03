import { useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const callouts = [
  {
    name: "Smartphones",
    description: "Work from home accessories",
    imageSrc:
    "https://i.dummyjson.com/data/products/1/1.jpg",
    imageAlt:
      "Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.",
  },
  {
    name: "Laptops",
    description: "Journals and note-taking",
    imageSrc:
    "https://i.dummyjson.com/data/products/6/1.png",
    imageAlt:
      "Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.",
  },
  {
    name: "Skincare",
    description: "Daily commute essentials",
    imageSrc:
    "https://i.dummyjson.com/data/products/19/1.jpg",
    imageAlt: "Collection of four insulated travel bottles on wooden shelf.",
  },
  {
    name: "Fragrances",
    description: "Daily commute essentials",
    imageSrc:
    "https://i.dummyjson.com/data/products/11/1.jpg",
    imageAlt: "Collection of four insulated travel bottles on wooden shelf.",
  },
  {
    name: "Groceries",
    description: "Daily commute essentials",
    imageSrc:
      
    "https://i.dummyjson.com/data/products/22/1.jpg",
    imageAlt: "Collection of four insulated travel bottles on wooden shelf.",
  },
  {
    name: "Home-Decoration",
    description: "Daily commute essentials",
    imageSrc:
      
    "https://i.dummyjson.com/data/products/28/1.jpg",
    imageAlt: "Collection of four insulated travel bottles on wooden shelf.",
  },
];

export default function Categories() {
  useEffect(() => {
    axios("https://dummyjson.com/products").then((res) => {
      console.log(res.data);
    });
  }, []);
  return (
    <div className="bg-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
          <h2 className="text-2xl font-bold text-gray-900">Kategoriler</h2>
          
          <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
            {callouts.map((callout) => (
              <Link style={{textDecoration:"none"}} to={`/categoryDetails/${callout.name}`}>
                <div key={callout.name} className="group relative">
                  <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                    <div>
                      <img
                        src={callout.imageSrc}
                        className="h-full w-full object-cover object-center"
                      />
                    </div>
                  </div>
                  <div className="mt-6 text-xl text-gray-900">
                    {callout.name}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
