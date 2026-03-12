import { useEffect,useState } from "react";
import api from "../api/axios";
import { Link } from "react-router-dom";

function RelatedProducts({category}){

const [products,setProducts] = useState([]);

useEffect(()=>{

api.get(`products/?category=${category}`)
.then(res=>setProducts(res.data));

},[category]);

return(

<div className="mt-16">

<h2 className="text-xl font-semibold mb-6">
Explore Related Products
</h2>

<div className="grid grid-cols-2 md:grid-cols-5 gap-6">

{products.map(p=>(

<Link
to={`/product/${p.id}`}
key={p.id}
className="border p-3 rounded"
>

<img
src={p.image}
className="h-32 mx-auto"
/>

<p className="text-sm mt-2">
{p.name}
</p>

<p className="font-semibold">
₹ {p.price}
</p>

</Link>

))}

</div>

</div>

);

}

export default RelatedProducts;