import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../api/axios";
import { Link } from "react-router-dom";

function OrderCompletePage() {

  const { id } = useParams();
  const [order, setOrder] = useState(null);

  useEffect(() => {

    api.get(`orders/${id}/`)
      .then((res) => {
        console.log(res.data);
        setOrder(res.data);
      })
      .catch((err) => console.log(err));

  }, [id]);

  if (!order) return <p className="p-10">Loading...</p>;

  const subtotal = order.items?.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const shipping = 20;
  const taxes = 10;
  const discount = order.coupon_discount || 0;

  return (
    <div className="max-w-5xl mx-auto p-6">

      {/* SUCCESS MESSAGE */}

      <div className="text-center mb-10">

        <h1 className="text-3xl font-bold text-green-600">
          Your order is completed !
        </h1>

        <p className="text-gray-500 mt-2">
          Thank You. Your Order has been completed
        </p>
      
        <Link
to={`/track-order?orderId=${order.id}`}
className="inline-block mt-6 bg-green-600 text-white px-6 py-3 rounded-full"
>
Track Your Order
</Link>

      </div>

      {/* ORDER INFO BAR */}

      <div className="bg-yellow-400 rounded-lg p-4 grid md:grid-cols-5 text-center mb-8 text-sm font-semibold">

        <div>
          <p className="text-gray-700">Order ID</p>
          <p>#{order.id}</p>
        </div>

        <div>
          <p className="text-gray-700">Payment Method</p>
          <p>{order.payment_method}</p>
        </div>

        <div>
          <p className="text-gray-700">Transaction ID</p>
          <p>#{order.id}</p>
        </div>

        <div>
          <p className="text-gray-700">Estimated Delivery Date</p>
          <p>27 May 2025</p>
        </div>

        <div className="flex items-center justify-center">
          <button className="bg-green-600 text-white px-3 py-2 rounded text-xs">
            Download Invoice
          </button>
        </div>

      </div>

      {/* ORDER DETAILS */}

      <div className="border rounded-xl p-6">

        <div className="flex justify-between mb-4">

          <h2 className="font-semibold text-lg">
            Order Details
          </h2>

          <span className="text-sm border px-3 py-1 rounded-full">
            Sub Total
          </span>

        </div>

        {/* PRODUCTS */}

        <div className="space-y-5">

          {order.items?.map((item) => (

            <div
              key={item.id}
              className="flex justify-between items-center border-b pb-4"
            >

              <div className="flex items-center gap-4">

                <img
                  src={`http://127.0.0.1:8000${item.product_image}`}
                  alt=""
                  className="w-14 h-14 rounded border object-cover"
                />

                <div>

                  <p className="font-medium">
                    {item.product_name}
                  </p>

                  <p className="text-sm text-gray-500">
                    {item.quantity} × ₹{item.price}
                  </p>

                </div>

              </div>

              <p className="font-semibold">
                ₹ {item.price * item.quantity}
              </p>

            </div>

          ))}

        </div>

        {/* PRICE SUMMARY */}

        <div className="mt-6 space-y-2 text-sm">

          <div className="flex justify-between">
            <span>Shipping</span>
            <span>₹ {shipping}</span>
          </div>

          <div className="flex justify-between">
            <span>Taxes</span>
            <span>₹ {taxes}</span>
          </div>

          <div className="flex justify-between">
            <span>Coupon Discount</span>
            <span>₹ {discount}</span>
          </div>

          <div className="flex justify-between font-bold text-lg mt-3">
            <span>Total</span>
            <span>₹ {subtotal + shipping + taxes - discount}</span>
          </div>

        </div>

      </div>

    </div>
  );
}

export default OrderCompletePage;