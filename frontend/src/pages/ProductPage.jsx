import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../api/axios";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";

import ProductTabs from "../components/ProductTabs";
import RelatedProducts from "../components/RelatedProducts";
import Newsletter from "../components/Newsletter";

function ProductPage() {

const { id } = useParams();
const navigate = useNavigate();
const dispatch = useDispatch();

const [product,setProduct] = useState(null);
const [qty,setQty] = useState(1);
const [activeWeight,setActiveWeight] = useState("500 g");
const [added,setAdded] = useState(false);
const [activeImage,setActiveImage] = useState("");

useEffect(()=>{

api.get(`products/${id}/`)
.then(res=>{
setProduct(res.data)

setActiveImage(`/products/${res.data.slug}.jpg`)

})
.catch(err=>console.log(err))

},[id])


if(!product) return <p className="text-center mt-20">Loading...</p>


/* ADD TO CART */

const addToCartHandler = () => {

dispatch(addToCart({
...product,
quantity: qty
}))

setAdded(true)

setTimeout(()=>{
setAdded(false)
},2000)

}


/* BUY NOW */

const buyNow = () => {

dispatch(addToCart({
...product,
quantity: qty
}))

navigate("/cart")

}


return (

<div className="max-w-7xl mx-auto px-6 py-10">

{/* PRODUCT SECTION */}

<div className="grid md:grid-cols-2 gap-12">


{/* LEFT SIDE IMAGES */}

<div>

{/* MAIN IMAGE */}

<img
src={activeImage}
onError={(e)=>{e.target.src="/products/default.jpg"}}
alt={product.name}
className="w-full rounded-lg bg-gray-100"
/>


{/* THUMBNAILS */}

<div className="flex gap-3 mt-4">

{["1","2","3"].map((i)=>(
<img
key={i}
src={`/products/${product.slug}.jpg`}
onClick={()=>setActiveImage(`/products/${product.slug}.jpg`)}
className="w-16 h-16 object-cover border rounded cursor-pointer"
alt=""
/>
))}

</div>

</div>


{/* RIGHT SIDE CONTENT */}

<div>

<p className="text-gray-500">{product.category?.name}</p>

<h1 className="text-2xl font-semibold mt-1">
{product.name}
</h1>


{/* RATING */}

<div className="flex items-center gap-2 mt-2">

<span className="text-yellow-500 text-lg">
★★★★★
</span>

<span className="text-gray-500 text-sm">
5.0 (245 Review)
</span>

</div>


{/* PRICE */}

<div className="flex items-center gap-3 mt-4">

<span className="text-3xl font-bold">
₹ {product.price}
</span>

<span className="text-gray-400 line-through">
₹ 800
</span>

</div>


{/* DESCRIPTION */}

<p className="text-gray-500 mt-4 leading-relaxed">

Green apple told to include greens in our diet the many
Green fruits are packed with vitamins and minerals potassium
Crisp and slightly tart, green apples for snacking and salads

</p>


{/* WEIGHT SELECTOR */}

<div className="mt-6">

<p className="font-medium mb-2">
Weight
</p>

<div className="flex gap-3">

{["500 g","1 Kg","2 Kg","5 Kg"].map(w=>(
<button
key={w}
onClick={()=>setActiveWeight(w)}
className={`px-4 py-2 border rounded-full text-sm
${activeWeight===w ? "bg-green-600 text-white border-green-600" : ""}`}
>
{w}
</button>
))}

</div>

</div>


{/* QUANTITY */}

<div className="flex items-center gap-3 mt-6">

<div className="flex border rounded-full overflow-hidden">

<button
onClick={()=>setQty(qty>1 ? qty-1 : 1)}
className="px-4"
>
-
</button>

<span className="px-5 py-1">
{qty}
</span>

<button
onClick={()=>setQty(qty+1)}
className="px-4"
>
+
</button>

</div>


{/* ADD CART */}

<button
onClick={addToCartHandler}
className="bg-green-600 text-white px-6 py-2 rounded-full"
>
{added ? "Added ✓" : "Add To Cart"}
</button>


{/* BUY NOW */}

<button
onClick={buyNow}
className="bg-yellow-400 px-6 py-2 rounded-full"
>
Buy Now
</button>

</div>


{/* SKU + TAGS */}

<div className="mt-6 text-sm text-gray-600 space-y-1">

<p>
<b>SKU :</b> {product.sku || "FGRFHDJKUJG"}
</p>

<p>
<b>Tags :</b> Apple, Green, Fruits
</p>

</div>


{/* SHARE */}

<div className="mt-3 flex items-center gap-3 text-sm text-gray-600">

<b>Share :</b>

<span>🔗</span>
<span>📘</span>
<span>🐦</span>
<span>📌</span>

</div>

</div>

</div>


{/* PRODUCT TABS */}

<ProductTabs product={product} />


{/* RELATED PRODUCTS */}

<RelatedProducts category={product.category?.id} />


{/* NEWSLETTER */}

<Newsletter/>

</div>

)

}

export default ProductPage