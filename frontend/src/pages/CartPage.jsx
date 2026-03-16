import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

function CartPage() {

  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  const subtotal =
    cart.items?.reduce(
      (acc, item) => acc + Number(item.price) * item.quantity,
      0
    ) || 0;

  // Increase / Decrease quantity
  const updateQuantity = (itemId, type) => {
    dispatch({
      type: "UPDATE_CART_QUANTITY",
      payload: { id: itemId, type },
    });
  };

  // Remove item
  const removeItem = (itemId) => {
    dispatch({
      type: "REMOVE_FROM_CART",
      payload: itemId,
    });
  };

  // Clear cart
  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

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
            {cart.items?.map((item) => (

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
                    src={item.image || `/images/products/${item.slug}.jpg`}
                    alt={item.name}
                    className="w-14 h-14 object-cover"
                  />

                  <p className="font-semibold">
                    {item.name}
                  </p>

                </div>

                {/* PRICE */}
                <span>
                  ₹ {item.price}
                </span>

                {/* QUANTITY */}
                <div className="flex items-center border rounded w-fit">

                  <button
                    onClick={() => updateQuantity(item.id, "dec")}
                    className="px-3 py-1 border"
                  >
                    -
                  </button>

                  <span className="px-4">
                    {item.quantity}
                  </span>

                  <button
                    onClick={() => updateQuantity(item.id, "inc")}
                    className="px-3 py-1 border"
                  >
                    +
                  </button>

                </div>

                {/* SUBTOTAL */}
                <span>
                  ₹ {Number(item.price) * item.quantity}
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
              onClick={clearCart}
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
            <span>{cart.items?.length || 0}</span>
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

          <hr className="my-3" />

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