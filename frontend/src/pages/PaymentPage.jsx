import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../api/axios";

function PaymentPage(){

const location = useLocation();

const navigate = useNavigate();

const { cart_items = [], subtotal = 0, total = 0, address_id } = location.state || {};

const [paymentMethod,setPaymentMethod] = useState("RAZORPAY");

useEffect(()=>{

const script = document.createElement("script");
script.src = "https://checkout.razorpay.com/v1/checkout.js";
script.async = true;
document.body.appendChild(script);

},[]);



const payNow = async()=>{

try{

/* CREATE ORDER */

const orderRes = await api.post("orders/create/",{
address_id:address_id,
payment_method:"RAZORPAY",
items: cart_items
});


/* RAZORPAY ORDER */

const razorOrder = await api.post("orders/razorpay/",{
amount: total
});


/* RAZORPAY OPTIONS */

const options = {

key: "rzp_test_SFKfcQi8HPjU4l",

amount: razorOrder.data.amount,

currency: "INR",

name: "Fresh Grocery",

description: "Order Payment",

order_id: razorOrder.data.razorpay_order_id,

handler: async function (response) {

  try {

    await api.post("orders/verify-payment/", {
      order_id: orderRes.data.order_id,
      razorpay_order_id: response.razorpay_order_id,
      razorpay_payment_id: response.razorpay_payment_id,
      razorpay_signature: response.razorpay_signature
    });

    // redirect after success
    navigate(`/order-complete/${orderRes.data.order_id}`);

  } catch (error) {

    console.log("VERIFY PAYMENT ERROR:", error);

    // still redirect even if verify fails
    navigate(`/order-complete/${orderRes.data.order_id}`);

  }

 }

};

const rzp = new window.Razorpay(options);

rzp.open();

}catch(err){

console.log("PAYMENT ERROR:", err.response?.data || err);
alert("Payment failed");

}

};



return(

<div className="max-w-7xl mx-auto p-8 grid md:grid-cols-2 gap-12">


{/* PAYMENT METHODS */}

<div>

<h2 className="text-xl font-semibold mb-6">
Select Payment Method
</h2>

<div className="space-y-3">

<label className="flex gap-3 border p-3 rounded cursor-pointer">

<input
type="radio"
checked={paymentMethod==="RAZORPAY"}
onChange={()=>setPaymentMethod("RAZORPAY")}
/>

Razorpay (UPI / Card / Wallet)

</label>


<label className="flex gap-3 border p-3 rounded cursor-pointer">

<input
type="radio"
checked={paymentMethod==="COD"}
onChange={()=>setPaymentMethod("COD")}
/>

Cash On Delivery

</label>

</div>


<button
onClick={payNow}
className="bg-green-600 text-white px-6 py-3 rounded mt-6 w-full"
>

Proceed to Payment

</button>

</div>



{/* ORDER SUMMARY */}

<div className="border rounded-lg p-6">

<h3 className="font-semibold mb-4">
Order Summary
</h3>


{cart_items.map(item=>(

<div key={item.id} className="flex justify-between mb-2">

<span>
{item.name} × {item.quantity}
</span>

<span>
₹ {Number(item.price)*item.quantity}
</span>

</div>

))}


<div className="flex justify-between mt-4">
<span>Subtotal</span>
<span>₹ {subtotal}</span>
</div>

<div className="flex justify-between">
<span>Shipping</span>
<span>₹ 20</span>
</div>

<div className="flex justify-between">
<span>Taxes</span>
<span>₹ 10</span>
</div>

<div className="flex justify-between font-bold text-lg mt-4">
<span>Total</span>
<span>₹ {total}</span>
</div>

</div>


</div>

)

}

export default PaymentPage;