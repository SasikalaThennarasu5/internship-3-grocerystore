import { useEffect, useState } from "react";
import api from "../api/axios";
import { Link } from "react-router-dom";

function CartPage() {

  const [cart, setCart] = useState({ items: [] });

  useEffect(() => {
    fetchCart();
  }, []);

  const fetchCart = () => {
    api.get("cart/")
      .then(res => setCart(res.data))
      .catch(err => console.log(err));
  };

  const updateQuantity = (itemId, quantity) => {

    if (quantity < 1) return;

    api.put("cart/update/", {
      item_id: itemId,
      quantity: quantity
    }).then(fetchCart);

  };

  const removeItem = (itemId) => {

    api.delete(`cart/remove/${itemId}/`)
      .then(fetchCart);

  };

  const subtotal = cart.items.reduce(
    (acc, item) => acc + Number(item.product_price) * item.quantity,
    0
  );

  return (

<div className="max-w-7xl mx-auto p-8">

{/* PAGE TITLE */}

<h1 className="text-3xl font-bold mb-8">
Shopping Cart
</h1>

<div className="grid md:grid-cols-3 gap-10">

{/* CART TABLE */}

<div className="md:col-span-2">

<div className="border rounded-lg overflow-hidden">

{/* HEADER */}

<div className="grid grid-cols-4 bg-yellow-400 font-semibold p-3">

<span>Product</span>
<span>Price</span>
<span>Quantity</span>
<span>Subtotal</span>

</div>

{/* ITEMS */}

{cart.items.map(item => (

<div
key={item.id}
className="grid grid-cols-4 items-center p-4 border-t"
>

{/* PRODUCT */}

<div className="flex items-center gap-3">

<button
className="text-red-500"
onClick={() => removeItem(item.id)}
>
✕
</button>

<img
src={item.product_image}
alt={item.product_name}
className="w-14 h-14 object-cover"
/>

<div>

<p className="font-semibold">
{item.product_name}
</p>

</div>

</div>

{/* PRICE */}

<span>
₹ {item.product_price}
</span>

{/* QUANTITY */}

<div className="flex items-center border rounded w-fit">

<button
className="px-3"
onClick={() =>
updateQuantity(item.id, item.quantity - 1)
}
>
-
</button>

<span className="px-4">
{item.quantity}
</span>

<button
className="px-3"
onClick={() =>
updateQuantity(item.id, item.quantity + 1)
}
>
+
</button>

</div>

{/* SUBTOTAL */}

<span>
₹ {Number(item.product_price) * item.quantity}
</span>

</div>

))}

</div>

{/* COUPON */}

<div className="flex gap-3 mt-6">

<input
placeholder="Coupon code"
className="border p-2 rounded flex-1"
/>

<button className="bg-green-600 text-white px-4 rounded">
Apply coupon
</button>

<button
onClick={() => window.location.reload()}
className="border px-4 rounded"
>
Clear Shopping Cart
</button>

</div>

</div>

{/* ORDER SUMMARY */}

<div className="border rounded-lg p-6 h-fit">

<h2 className="text-lg font-semibold mb-4">
Order Summary
</h2>

<div className="flex justify-between mb-2">
<span>Items</span>
<span>{cart.items.length}</span>
</div>

<div className="flex justify-between mb-2">
<span>Sub Total</span>
<span>₹ {subtotal}</span>
</div>

<div className="flex justify-between mb-2">
<span>Shipping</span>
<span>₹ 20</span>
</div>

<div className="flex justify-between mb-2">
<span>Taxes</span>
<span>₹ 0</span>
</div>

<div className="flex justify-between mb-2">
<span>Coupon Discount</span>
<span>₹ 10</span>
</div>

<hr className="my-3"/>

<div className="flex justify-between font-bold text-lg">
<span>Total</span>
<span>₹ {subtotal + 20 - 10}</span>
</div>

<Link to="/checkout">

<button className="w-full bg-green-600 text-white py-3 rounded mt-6">
Proceed to Checkout
</button>

</Link>

</div>

</div>

</div>

  );
}

export default CartPage;