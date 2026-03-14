import { useEffect, useState } from "react";
import { getFeaturedProducts } from "../../services/api";
import ProductCard from "./ProductCard";

const FeaturedProducts = () => {

const [products,setProducts] = useState([]);

useEffect(()=>{

getFeaturedProducts().then((data)=>{
setProducts(data);
});

},[]);

return(

<section className="py-12 bg-purple-100">

<div className="container mx-auto">

<div className="flex justify-between items-center mb-8">

<h2 className="text-2xl font-bold">
Featured Products
</h2>

<button className="bg-green-600 text-white px-6 py-2 rounded-full">
View All Products
</button>

</div>

<div className="grid grid-cols-5 gap-6">

{products.map((product)=>(
<ProductCard key={product.id} product={product}/>
))}

</div>

</div>

</section>

);

};

export default FeaturedProducts;