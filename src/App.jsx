import Navbar from "./components/Navbar";
import StoreNavigation from "./components/StoreNavigation";
import PromoSection from "./components/PromoSection";
import Category from "./components/Category";
import ProductList from "./components/ProductList";
import { CommerceProvider } from "./context/Commerce";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <CommerceProvider>
      <Navbar></Navbar>
      <StoreNavigation></StoreNavigation>
      <PromoSection></PromoSection>
      <Category></Category>
      <ProductList></ProductList>
    </CommerceProvider>
  );
}

export default App;
