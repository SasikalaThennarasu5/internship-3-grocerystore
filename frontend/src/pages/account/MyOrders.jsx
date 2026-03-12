import { useEffect, useState } from "react";
import axios from "axios";

function MyOrders() {

  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios.get("/api/orders/")
      .then(res => setOrders(res.data));
  }, []);

  return (
    <div>

      <h2>My Orders</h2>

      {orders.map(order => (
        <div key={order.id}>

          <p>Order ID: {order.id}</p>
          <p>Total: {order.total_price}</p>
          <p>Status: {order.status}</p>

        </div>
      ))}

    </div>
  );
}

export default MyOrders;