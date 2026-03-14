import { useState } from "react";
import api from "../api/axios";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function CheckoutPage() {

const navigate = useNavigate();

const cart = useSelector(state => state.cart);

/* CALCULATE TOTAL */

const subtotal = cart.items.reduce(
(acc,item)=> acc + item.price * item.quantity,
0
);

const total = subtotal + 30;


/* FORM STATE */

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
email:"",
delivery_address:false,
different_billing:false
});


/* HANDLE INPUT */

const handleChange=(e)=>{

const {name,value,type,checked}=e.target;

setForm({
...form,
[name]: type==="checkbox" ? checked : value
});

};


/* GO TO PAYMENT PAGE */

const goToPayment = async () => {

try{

const addressRes = await api.post("orders/address/", form);

navigate("/payment",{
state:{
address_id: addressRes.data.id,
cart_items: cart.items,
subtotal: subtotal,
total: total
}
});

}catch(error){

console.log(error);
alert("Address save failed");

}

};


return(

<div className="max-w-7xl mx-auto px-6 py-10">

{/* PAGE TITLE */}

<div className="text-center mb-10">

<h1 className="text-3xl font-bold">Checkout</h1>

<p className="text-gray-500 text-sm">
Home / shopping cart / Checkout
</p>

</div>


<div className="grid md:grid-cols-2 gap-12">


{/* LEFT FORM */}

<div>

<h2 className="text-lg font-semibold mb-6">
Billing Details
</h2>

<div className="grid grid-cols-2 gap-4">

<input name="first_name" placeholder="First Name *" className="border p-3 rounded" onChange={handleChange}/>
<input name="last_name" placeholder="Last Name *" className="border p-3 rounded" onChange={handleChange}/>

</div>

<input name="company" placeholder="Company NAME (OPTIONAL)" className="border p-3 rounded w-full mt-4" onChange={handleChange}/>
<input name="country" placeholder="Country *" className="border p-3 rounded w-full mt-4" onChange={handleChange}/>
<input name="street_address" placeholder="Street Address *" className="border p-3 rounded w-full mt-4" onChange={handleChange}/>
<input name="city" placeholder="City *" className="border p-3 rounded w-full mt-4" onChange={handleChange}/>
<input name="state" placeholder="State *" className="border p-3 rounded w-full mt-4" onChange={handleChange}/>
<input name="zip_code" placeholder="Zip code *" className="border p-3 rounded w-full mt-4" onChange={handleChange}/>
<input name="phone" placeholder="Phone *" className="border p-3 rounded w-full mt-4" onChange={handleChange}/>
<input name="email" placeholder="Email *" className="border p-3 rounded w-full mt-4" onChange={handleChange} />


<button
onClick={goToPayment}
className="bg-green-600 text-white px-10 py-2 rounded mt-6"
>
Submit
</button>

</div>


{/* ORDER SUMMARY */}

<div>

<div className="border rounded-lg p-6">

<h3 className="font-semibold mb-4">
Order Summary
</h3>

{cart.items.map(item=>(

<div key={item.id} className="flex justify-between text-sm mb-2">

<span>
{item.name} × {item.quantity}
</span>

<span>
₹ {item.price * item.quantity}
</span>

</div>

))}


<div className="flex justify-between mt-4 text-sm">
<span>Sub Total</span>
<span>₹ {subtotal}</span>
</div>

<div className="flex justify-between text-sm">
<span>Shipping</span>
<span>₹ 20</span>
</div>

<div className="flex justify-between text-sm">
<span>Taxes</span>
<span>₹ 10</span>
</div>

<div className="flex justify-between font-bold text-lg mt-4">
<span>Total</span>
<span>₹ {total}</span>
</div>


<button
onClick={goToPayment}
className="w-full bg-green-600 text-white py-3 rounded mt-6"
>
Proceed to Checkout
</button>

</div>

</div>

</div>

</div>

);

}

export default CheckoutPage;