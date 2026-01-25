import React from 'react'
import SearchBar from '../components/products/SearchBar'
import ProductsTable from '../components/products/ProductsTable'
import { PRODUCTS } from '../constants/ProductsData'


const ProductsPage = () => {
  // const[products, setProducts] = useState([]);
  // api call to get the data and then we would have used setProducts
  // for now lets say api call is success and we get mock data in PRODUCTS constant

  return (
    <>
    <h1>ProductsPage </h1>
    <hr />
    <SearchBar />
    <ProductsTable products = {PRODUCTS} />
    </>
  )
}

export default ProductsPage