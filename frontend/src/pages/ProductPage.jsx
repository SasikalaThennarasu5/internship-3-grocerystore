import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../api/axios";

import ProductTabs from "../components/ProductTabs";
import RelatedProducts from "../components/RelatedProducts";
import Newsletter from "../components/Newsletter";

function ProductPage() {

const { id } = useParams();
const navigate = useNavigate();

const [product,setProduct] = useState(null);
const [qty,setQty] = useState(1);
const [activeWeight,setActiveWeight] = useState("500g");

useEffect(()=>{
    api.get(`products/${id}/`)
    .then(res=>setProduct(res.data))
    .catch(err=>console.log(err));
},[id]);

if(!product) return <p>Loading...</p>;

const addToCart = async ()=>{

await api.post("cart/add/",{
product_id:product.id,
quantity:qty
});

alert("Added to cart");

};

const buyNow = async ()=>{

await api.post("cart/add/",{
product_id:product.id,
quantity:qty
});

navigate("/checkout");

};

return(

<div className="max-w-7xl mx-auto px-6 py-10">

{/* PRODUCT SECTION */}

<div className="grid md:grid-cols-2 gap-10">

{/* IMAGE */}

<div>

<img
src={product.image}
className="rounded-lg w-full"
/>

<div className="flex gap-3 mt-4">

{product.gallery?.map((img,i)=>(
<img
key={i}
src={img}
className="w-16 h-16 border rounded"
/>
))}

</div>

</div>

{/* INFO */}

<div>

<p className="text-gray-500">{product.category_name}</p>

<h1 className="text-2xl font-semibold">
{product.name}
</h1>

<div className="flex items-center gap-2 mt-2">

<span className="text-yellow-500">★★★★★</span>

<span className="text-gray-500 text-sm">
({product.review_count} Reviews)
</span>

</div>

<p className="text-3xl font-bold mt-3">
₹ {product.price}
</p>

<p className="text-gray-500 mt-4">
{product.short_description}
</p>

{/* WEIGHT */}

<div className="mt-5">

<p className="font-medium mb-2">Weight</p>

<div className="flex gap-2">

{["500g","1Kg","2Kg","5Kg"].map(w=>(
<button
key={w}
onClick={()=>setActiveWeight(w)}
className={`px-4 py-2 border rounded 
${activeWeight===w?"bg-green-600 text-white":"bg-white"}`}
>
{w}
</button>
))}

</div>

</div>

{/* QUANTITY */}

<div className="flex items-center gap-3 mt-5">

<button
onClick={()=>setQty(qty>1?qty-1:1)}
className="border px-3"
>-</button>

<span>{qty}</span>

<button
onClick={()=>setQty(qty+1)}
className="border px-3"
>+</button>

</div>

{/* BUTTONS */}

<div className="flex gap-4 mt-6">

<button
onClick={addToCart}
className="bg-green-600 text-white px-6 py-3 rounded"
>
Add to Cart
</button>

<button
onClick={buyNow}
className="bg-yellow-400 px-6 py-3 rounded"
>
Buy Now
</button>

</div>

{/* SKU */}

<div className="mt-5 text-sm text-gray-500">

<p>SKU : {product.sku}</p>
<p>Tags : {product.tags}</p>

</div>

</div>

</div>

{/* TABS */}

<ProductTabs product={product} />

{/* RELATED */}

<RelatedProducts category={product.category} />

{/* NEWSLETTER */}

<Newsletter/>

</div>

);

}

export default ProductPage;