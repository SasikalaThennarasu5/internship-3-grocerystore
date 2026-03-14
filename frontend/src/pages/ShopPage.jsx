import { useEffect, useState } from "react"
import api from "../api/axios"

import FilterSidebar from "../components/shop/FilterSidebar"
import ProductGrid from "../components/shop/ProductGrid"
import SortBar from "../components/shop/SortBar"
import ActiveFilters from "../components/shop/ActiveFilters"
import Pagination from "../components/shop/Pagination"

function ShopPage(){

const [products,setProducts] = useState([])
const [categories,setCategories] = useState([])
const [brands,setBrands] = useState([])

const [filters,setFilters] = useState({})
const [page,setPage] = useState(1)
const [totalPages,setTotalPages] = useState(1)

useEffect(()=>{
fetchProducts()
},[filters,page])

useEffect(()=>{
fetchFilters()
},[])

const fetchProducts = async()=>{

const res = await api.get("/products/",{
params:{
...filters,
page:page
}
})

setProducts(res.data.results)
setTotalPages(Math.ceil(res.data.count/12))

}

const fetchFilters = async () => {
  try {

    const catRes = await api.get("/products/categories/")
    const brandRes = await api.get("/products/brands/")

    setCategories(catRes.data.results || catRes.data)
    setBrands(brandRes.data.results || brandRes.data)

  } catch (error) {
    console.error(error)
  }
}

return(

<div className="max-w-7xl mx-auto grid grid-cols-4 gap-8 p-6">

<FilterSidebar
filters={filters}
setFilters={setFilters}
categories={categories}
brands={brands}
/>

<div className="col-span-3">

<SortBar
filters={filters}
setFilters={setFilters}
/>

<ActiveFilters
filters={filters}
setFilters={setFilters}
/>

<ProductGrid products={products}/>

<Pagination
page={page}
setPage={setPage}
totalPages={totalPages}
/>

</div>

</div>

)

}

export default ShopPage