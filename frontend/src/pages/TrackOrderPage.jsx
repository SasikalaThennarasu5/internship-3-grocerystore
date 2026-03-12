import { useState } from "react";
import axios from "axios";

function TrackOrderPage() {

  const [orderId, setOrderId] = useState("");
  const [order, setOrder] = useState(null);

  const trackOrder = () => {

    axios.get(`/api/orders/${orderId}/`)
      .then(res => setOrder(res.data))
      .catch(() => alert("Order not found"));

  };

  return (
    <div className="track-order">

      <h2>Track Your Order</h2>

      <input
        type="text"
        placeholder="Enter Order ID"
        value={orderId}
        onChange={(e) => setOrderId(e.target.value)}
      />

      <button onClick={trackOrder}>
        Track Order
      </button>

      {order && (
        <div className="order-result">

          <p>Order ID: {order.id}</p>
          <p>Status: {order.status}</p>
          <p>Total: ${order.total_price}</p>

        </div>
      )}

    </div>
  );
}

export default TrackOrderPage;