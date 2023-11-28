import React from 'react'
import PromoSection from "./PromoSection"
import Categories from "./Categories"
import ProductList from './ProductList'
function Home() {
  return (
    <div>
        <PromoSection></PromoSection>
        <Categories></Categories>
        <ProductList></ProductList>
    </div>
  )
}

export default Home