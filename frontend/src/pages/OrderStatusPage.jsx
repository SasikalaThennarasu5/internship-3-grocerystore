import { useEffect, useState } from "react";
import api from "../api/axios";
import { useParams } from "react-router-dom";

function OrderStatusPage() {

const { id } = useParams();
const [order, setOrder] = useState(null);

useEffect(() => {

api.get(`/api/orders/${id}/`)
.then(res => setOrder(res.data))
.catch(err => {
  console.error(err);
  setOrder({ items: [] });
});

}, [id]);

if (!order) return <p className="p-10">Loading...</p>;

const steps = [
"pending",
"paid",
"shipped",
"delivered"
];

const currentStep = steps.indexOf(order.status);

return (

<div className="bg-gray-100 min-h-screen">

{/* PAGE HEADER */}
<div className="bg-[#e6d2a8] py-12 text-center">

<h1 className="text-4xl font-bold">
Track Your Order
</h1>

<p className="text-sm mt-2">
Home / Track Your Order
</p>

</div>


<div className="max-w-6xl mx-auto px-6 py-10">

<h2 className="text-xl font-semibold mb-2">
Order Status
</h2>

<p className="text-gray-600 mb-6">
Order ID : #{order.id}
</p>


{/* PROGRESS BAR */}
<div className="bg-white border rounded-lg p-8 mb-10">

<div className="flex justify-between items-center">

{steps.map((step, index) => (

<div key={step} className="flex flex-col items-center flex-1">

<div
className={`w-10 h-10 rounded-full flex items-center justify-center
${index <= currentStep ? "bg-green-600 text-white" : "bg-gray-200"}`}
>

✓

</div>

<p className="text-sm mt-2 capitalize">
{step.replace("_"," ")}
</p>

</div>

))}

</div>

{/* LINE */}
<div className="h-1 bg-gray-200 mt-6 relative">

<div
className="h-1 bg-green-600 absolute left-0 top-0"
style={{ width: `${(currentStep/(steps.length-1))*100}%` }}
></div>

</div>

</div>


{/* PRODUCTS */}
<div className="bg-white rounded-lg shadow">

<div className="bg-yellow-400 px-6 py-3 font-semibold rounded-t-lg">
Product
</div>

{order.items?.map(item => (

<div
key={item.id}
className="flex items-center justify-between px-6 py-5 border-b"
>

<div className="flex items-center gap-4">

<img
src={item.product_image || "/placeholder.png"}
className="w-12 h-12 rounded"
/>

<div>

<p className="font-semibold">
{item.product_name}
</p>

<p className="text-sm text-gray-500">
{item.quantity} qty
</p>

</div>

</div>

<p className="font-semibold">
${item.price}
</p>

</div>

))}

</div>

<p className="text-right font-bold mt-4 text-lg">
Total : ${order.total_price}
</p>

</div>


{/* FEATURES */}
<div className="border-t py-10 bg-white">

<div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6 text-center">

<div>
<h4 className="font-semibold">Free shipping</h4>
<p className="text-sm text-gray-500">
Free shipping for order above $150
</p>
</div>

<div>
<h4 className="font-semibold">Flexible Payment</h4>
<p className="text-sm text-gray-500">
Multiple secure payments options
</p>
</div>

<div>
<h4 className="font-semibold">24 x 7 Support</h4>
<p className="text-sm text-gray-500">
We support online all days
</p>
</div>

</div>

</div>


{/* NEWSLETTER */}
<div className="py-14 text-center">

<h4 className="text-gray-500">
Our Newsletter
</h4>

<h2 className="text-3xl font-bold mt-2">
Subscribe to Our Newsletter to
<br/>
Get Updates on our latest offers
</h2>

<div className="mt-6 flex justify-center gap-4">

<input
placeholder="Enter Email Address"
className="border px-5 py-3 rounded-full w-72"
/>

<button className="bg-yellow-400 px-6 py-3 rounded-full font-semibold">
subscribe
</button>

</div>

</div>

</div>

);

}

export default OrderStatusPage;