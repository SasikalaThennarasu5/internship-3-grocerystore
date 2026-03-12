import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function OrderStatusPage() {

  const { id } = useParams();
  const [order, setOrder] = useState(null);

  useEffect(() => {

    axios.get(`/api/orders/${id}/`)
      .then(res => setOrder(res.data));

  }, [id]);

  if (!order) return <p>Loading...</p>;

  return (
    <div className="order-status">

      <h2>Order Status</h2>

      <p>Order ID: {order.id}</p>
      <p>Status: {order.status}</p>

      <h3>Items</h3>

      {order.items.map(item => (

        <div key={item.id}>

          <p>Product: {item.product}</p>
          <p>Quantity: {item.quantity}</p>
          <p>Price: ${item.price}</p>

        </div>

      ))}

      <h3>Total: ${order.total_price}</h3>

    </div>
  );
}

export default OrderStatusPage;