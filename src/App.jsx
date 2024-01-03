import Navbar2 from "./components/Navbar2";
// import StoreNavigation from "./components/StoreNavigation";
import ProductDetails from "./components/ProductDetails";
import { CommerceProvider } from "./context/CommerceProvider";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import CategoryDetails from "./components/CategoryDetails";
import Footer from "./components/Footer";
import Favoriler from "./components/Favoriler";
import Basket from "./components/Basket";
import Dashbord from "./components/Dashbord";
function App() {
  return (
    <div>
      <CommerceProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Dashbord></Dashbord>}>
              <Route index element={<Home></Home>}></Route>
              <Route path="/basket" element={<Basket></Basket>}></Route>
              <Route path="/favorite" element={<Favoriler></Favoriler>}></Route>
              <Route
                path="/detail/:id"
                element={<ProductDetails></ProductDetails>}
              ></Route>
              <Route
                path="/categoryDetails/:name"
                element={<CategoryDetails></CategoryDetails>}
              ></Route>
            </Route>
          </Routes>
        </BrowserRouter>
        <Footer></Footer>
      </CommerceProvider>
    </div>
  );
}

export default App;
