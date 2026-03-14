import { useState } from "react";
import axios from "axios";
import { useSearchParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function TrackOrderPage() {

const [searchParams] = useSearchParams();
const navigate = useNavigate();  

const [orderId, setOrderId] = useState(
  searchParams.get("orderId") || ""
);
const [email, setEmail] = useState("");
const [order, setOrder] = useState(null);


const trackOrder = () => {

axios.get(`/api/orders/${orderId}/`)
.then(res => {
  setOrder(res.data);

  navigate(`/order-status/${orderId}`);
})
.catch(() => alert("Order not found"));

};



return (

<div className="bg-gray-100 min-h-screen">

{/* PAGE HEADER */}
<div className="bg-[#e6d2a8] py-12 text-center relative">

<h1 className="text-4xl font-bold">
Track Your Order
</h1>

<p className="text-sm mt-2">
Home / Track Your Order
</p>

</div>


{/* FORM SECTION */}
<div className="max-w-3xl mx-auto px-6 py-12">

<p className="text-gray-600 mb-8">
To track your order please enter your Order ID in the box below and
press the <b>"TRACK ORDER"</b> button. This was given to you on your
receipt and in the confirmation email you should have received.
</p>

{/* ORDER ID */}
<label className="block mb-2 font-semibold">
Order ID*
</label>

<input
type="text"
value={orderId}
onChange={(e)=>setOrderId(e.target.value)}
className="w-full border rounded-xl px-4 py-3 mb-6"
/>


{/* BILLING EMAIL */}
<label className="block mb-2 font-semibold">
Billing Email*
</label>

<input
type="email"
value={email}
onChange={(e)=>setEmail(e.target.value)}
className="w-full border rounded-xl px-4 py-3 mb-6"
/>


<button
onClick={trackOrder}
className="bg-green-700 text-white px-6 py-3 rounded-full"
>
Order Track
</button>


{/* ORDER RESULT */}
{order && (

<div className="bg-white shadow rounded-lg p-6 mt-8">

<h3 className="text-xl font-bold mb-4">
Order Details
</h3>

<p><b>Order ID:</b> {order.id}</p>
<p><b>Status:</b> {order.status}</p>
<p><b>Total:</b> ${order.total_price}</p>

</div>

)}

</div>


{/* FEATURES SECTION */}
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
Subscribe
</button>

</div>

</div>

</div>

);

}

export default TrackOrderPage;