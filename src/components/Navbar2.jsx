import React from "react";
import { CiSearch } from "react-icons/ci";
import { useCommerce } from "../context/CommerceProvider";
import {
  Bars3Icon,
  BellIcon,
  XMarkIcon,
  ShoppingBagIcon,
} from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import { MdFavoriteBorder } from "react-icons/md";
import { CiUser } from "react-icons/ci";

function Navbar2() {
  const {basket}=useCommerce()
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link to="/" style={{textDecoration:"none"}} className="navbar-brand">
          Logo
         
        </Link>

        <div className="ml-auto flex items-center space-x-2">
          <div className=" lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-3">
            <Link to="/favorite">
              <MdFavoriteBorder size={25} />
              <span className="h-6 w-px bg-gray-200" aria-hidden="true" />
            </Link>
            
          </div>
          <Link to="/basket" className="group-m-2 flex items-center p-2">
            <ShoppingBagIcon
              className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
              aria-hidden="true"
            />
            <div className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">
              {basket.length}
            </div>
            <span className="sr-only">items in cart, view bag</span>
          </Link>
          <div className=" lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-3">
            {/* <span className="h-6 w-px bg-gray-200" aria-hidden="true" /> */}
            <CiUser size={25} />
          </div>
        </div>
        {/* <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
                <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Link</a>
            </li>
            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-expanded="false">
                Dropdown
                </a>
                <div class="dropdown-menu">
                <a class="dropdown-item" href="#">Action</a>
                <a class="dropdown-item" href="#">Another action</a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="#">Something else here</a>
                </div>
            </li>
            <li class="nav-item">
                <a class="nav-link disabled">Disabled</a>
            </li>
            </ul>
            <form class="form-inline my-2 my-lg-0">
            
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
        </div> */}
      </div>
    </nav>
  );
}

export default Navbar2;
