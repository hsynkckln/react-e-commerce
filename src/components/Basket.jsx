import React, { useEffect } from "react";
import { IoIosClose } from "react-icons/io";
import { useCommerce } from "../context/CommerceProvider";
function Basket() {
  const { basket, setBasket } = useCommerce();

  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col-sm-12">
          <div className="text-3xl font-bold">Shopping Card</div>
        </div>
      </div>
      {/* {
        basket.map((item,key)=>(
          <div>
            <img src={item.images[0]}/>
            <div>{item.brand}</div>
            <div>{item.description}</div>
          </div>
        ))
      } */}
      <div className="row mt-5">
        <div className="col-sm-6">
          <hr />
          {basket.map((item, key) => (
            <div
              key={key}
              className="flex justify-between items-center space-x-2 mt-5">
            
              <div  className="flex  space-x-2" >
                <img width="30%" height="30%" src={item.images[0]} className=" rounded-xl"/>
                  
                  <div >
                    <p >{item.brand}</p>
                    <p >${item.price}</p>
                  </div>
                
              </div>

              <div className="flex justify-between flex-1">
                <div className=" items-center">
                  <select
                    style={{ border: "1px solid gray", borderRadius: "15%" }}
                  >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </div>
                <div className="flex items-center space-x-2">
                  <IoIosClose size={25} />
                </div>
              </div>
            </div>
            
          ))}
          <hr />
        </div>

        <div className="col-sm-6">basket</div>
      </div>
    </div>
  );
}

export default Basket;
