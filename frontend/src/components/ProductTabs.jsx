import { useState } from "react";
import Reviews from "./Reviews";

function ProductTabs({product}){

const [tab,setTab] = useState("description");

return(

<div className="mt-12">

{/* TAB HEADER */}

<div className="flex gap-10 border-b pb-3">

<button
onClick={()=>setTab("description")}
className={tab==="description"?"font-semibold":""}
>
Description
</button>

<button
onClick={()=>setTab("info")}
className={tab==="info"?"font-semibold":""}
>
Additional information
</button>

<button
onClick={()=>setTab("reviews")}
className={tab==="reviews"?"font-semibold":""}
>
Review
</button>

</div>

{/* TAB CONTENT */}

<div className="mt-6">

{tab==="description" &&(

<div>

<p>{product.description}</p>

<ul className="mt-4 space-y-2">

<li>As you know an apple a day</li>
<li>content ensures a better metabolism</li>
<li>100% various vitamins and minerals</li>
<li>Crisp and slightly on. green apples</li>

</ul>

</div>

)}

{tab==="info" &&(

<table className="w-full border">

<tbody>

<tr className="bg-green-600 text-white">
<td className="p-3">Attribute</td>
<td className="p-3">Details</td>
</tr>

<tr>
<td className="p-3">Products type</td>
<td className="p-3">Fresh Fruits</td>
</tr>

<tr className="bg-gray-100">
<td className="p-3">Origin</td>
<td className="p-3">Gunnar, Kerala</td>
</tr>

<tr>
<td className="p-3">Colour</td>
<td className="p-3">Bright green</td>
</tr>

<tr className="bg-gray-100">
<td className="p-3">Supplier</td>
<td className="p-3">Fresh Harvest</td>
</tr>

</tbody>

</table>

)}

{tab==="reviews" &&(

<Reviews productId={product.id}/>

)}

</div>

</div>

);

}

export default ProductTabs;