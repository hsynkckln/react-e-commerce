import Navbar from "./components/Navbar";
import StoreNavigation from "./components/StoreNavigation";
import ProductDetails from "./components/ProductDetails";
import { CommerceProvider } from "./context/CommerceProvider";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import CategoryDetails from "./components/CategoryDetails";
import Footer from "./components/Footer";
import Favoriler from "./components/Favoriler";
import Basket from "./components/Basket";
function App() {
  return (
    <CommerceProvider>
      <Navbar></Navbar>
      <StoreNavigation></StoreNavigation>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route
            path="/detail/:id"
            element={<ProductDetails></ProductDetails>}
          ></Route>
          <Route path="/categoryDetails/:name" element={<CategoryDetails></CategoryDetails>}></Route>
          <Route path="/favorite" element={<Favoriler></Favoriler>}></Route>
          <Route path="/basket" element={<Basket></Basket>}></Route>
        </Routes>
      </BrowserRouter>
      <Footer></Footer>
    </CommerceProvider>
  );
}

export default App;
