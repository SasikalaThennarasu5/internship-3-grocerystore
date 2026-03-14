import { useEffect, useState } from "react";
import { getOrders } from "../../services/accountService";
import { Link } from "react-router-dom";

function MyOrders() {

  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const fetchOrders = async () => {
      try {
        const res = await getOrders();
        setOrders(res.data);
      } catch (error) {
        console.error("Orders load error", error);
      }

      setLoading(false);
    };

    fetchOrders();

  }, []);

  if (loading) {
    return <p>Loading orders...</p>;
  }

  if (orders.length === 0) {
    return <p>No orders found</p>;
  }

  return (
    <div className="my-orders">

      <h2>My Orders</h2>

      {orders.map(order => (

        <div key={order.id} className="order-card">

          <h4>Order #{order.id}</h4>

          <p>Status: {order.status}</p>

          <p>Total: ₹{order.total_price}</p>

          <p>
            Date: {new Date(order.created_at).toLocaleDateString()}
          </p>

          {/* items preview */}

          {order.items && order.items.length > 0 && (
            <div className="order-items">
              {order.items.slice(0,2).map(item => (
                <p key={item.id}>
                  {item.product_name} × {item.quantity}
                </p>
              ))}
            </div>
          )}

          <Link to={`/order-status/${order.id}`}>
            Track Order
          </Link>

        </div>

      ))}

    </div>
  );
}

export default MyOrders;