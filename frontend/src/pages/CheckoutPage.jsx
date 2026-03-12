import { useEffect, useState } from "react";
import api from "../api/axios";
import { useNavigate } from "react-router-dom";

function CheckoutPage() {

  const navigate = useNavigate();

  const [cart,setCart] = useState({items:[]});
  const [payment,setPayment] = useState("COD");

  const [form,setForm] = useState({
    first_name:"",
    last_name:"",
    company:"",
    country:"India",
    street_address:"",
    city:"",
    state:"",
    zip_code:"",
    phone:"",
    email:""
  });

  useEffect(()=>{

    api.get("cart/")
    .then(res=>setCart(res.data))
    .catch(err=>console.log(err));

  },[]);

  const handleChange=(e)=>{
    setForm({
      ...form,
      [e.target.name]:e.target.value
    });
  };

  const subtotal = cart.items.reduce(
    (acc,item)=>acc + Number(item.product_price)*item.quantity,
    0
  );

  const placeOrder = async()=>{

    try{

      const addressRes = await api.post("orders/address/", form);

console.log("ADDRESS RESPONSE:", addressRes.data);

      const orderRes = await api.post(
        "orders/create/",
        {
          address_id:addressRes.data.id,
          payment_method:payment
        }
      );

      navigate(`/order-complete/${orderRes.data.order_id}`);

    }catch(error){

      console.log("ORDER ERROR:", error.response.data);
  console.log("STATUS:", error.response.status);
      alert("Order failed");

    }

  };

  return(

<div className="max-w-7xl mx-auto p-8 grid md:grid-cols-2 gap-12">

{/* BILLING FORM */}

<div>

<h2 className="text-xl font-semibold mb-6">Billing Details</h2>

<div className="grid grid-cols-2 gap-4">

<input
name="first_name"
placeholder="First Name *"
className="border p-3 rounded"
onChange={handleChange}
/>

<input
name="last_name"
placeholder="Last Name *"
className="border p-3 rounded"
onChange={handleChange}
/>

</div>

<input
name="company"
placeholder="Company Name (Optional)"
className="border p-3 rounded w-full mt-4"
onChange={handleChange}
/>

<input
name="country"
placeholder="Country"
className="border p-3 rounded w-full mt-4"
onChange={handleChange}
/>

<input
name="street_address"
placeholder="Street Address *"
className="border p-3 rounded w-full mt-4"
onChange={handleChange}
/>

<div className="grid grid-cols-3 gap-4 mt-4">

<input
name="city"
placeholder="City *"
className="border p-3 rounded"
onChange={handleChange}
/>

<input
name="state"
placeholder="State *"
className="border p-3 rounded"
onChange={handleChange}
/>

<input
name="zip_code"
placeholder="Zip Code *"
className="border p-3 rounded"
onChange={handleChange}
/>

</div>

<div className="grid grid-cols-2 gap-4 mt-4">

<input
name="phone"
placeholder="Phone *"
className="border p-3 rounded"
onChange={handleChange}
/>

<input
name="email"
placeholder="Email *"
className="border p-3 rounded"
onChange={handleChange}
/>

</div>

</div>

{/* RIGHT SIDE */}

<div>

{/* PAYMENT */}

<div className="border rounded-lg p-6 mb-6">

<h3 className="font-semibold mb-4">
Select Payment Method
</h3>

<div className="space-y-3">

<label className="flex gap-3 border p-3 rounded cursor-pointer">
<input
type="radio"
value="PAYPAL"
checked={payment==="paypal"}
onChange={(e)=>setPayment(e.target.value)}
/>
PayPal
</label>

<label className="flex gap-3 border p-3 rounded cursor-pointer">
<input
type="radio"
value="CARD"
onChange={(e)=>setPayment(e.target.value)}
/>
Credit / Debit Card
</label>

<label className="flex gap-3 border p-3 rounded cursor-pointer">
<input
type="radio"
value="GOOGLEPAY"
onChange={(e)=>setPayment(e.target.value)}
/>
Google Pay
</label>

<label className="flex gap-3 border p-3 rounded cursor-pointer">
<input
type="radio"
value="COD"
onChange={(e)=>setPayment(e.target.value)}
/>
Cash On Delivery
</label>

</div>

</div>

{/* ORDER SUMMARY */}

<div className="border rounded-lg p-6">

<h3 className="font-semibold mb-4">
Order Summary
</h3>

{cart.items.map(item=>(
<div
key={item.id}
className="flex justify-between mb-2"
>

<span>
{item.product_name} × {item.quantity}
</span>

<span>
₹ {Number(item.product_price)*item.quantity}
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
<span>₹ {subtotal+30}</span>
</div>

<button
onClick={placeOrder}
className="w-full bg-green-600 text-white py-3 rounded mt-6"
>
Proceed to Checkout
</button>

</div>

</div>

</div>

  );
}

export default CheckoutPage;