import { useEffect, useState } from "react";
import axios from "axios";

function WishlistPage() {

  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    axios.get("/api/wishlist/")
      .then(res => setWishlist(res.data));
  }, []);

  const removeItem = (product_id) => {

    axios.delete(`/api/wishlist/remove/${product_id}/`)
      .then(() => {
        setWishlist(
          wishlist.filter(item => item.product !== product_id)
        );
      });

  };

  return (
    <div className="wishlist-container">

      <h2>Wishlist</h2>

      <table>

        <thead>
          <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Date Added</th>
            <th>Stock Status</th>
            <th></th>
          </tr>
        </thead>

        <tbody>

          {wishlist.map(item => (

            <tr key={item.id}>

              <td>{item.product}</td>
              <td>${item.price}</td>
              <td>{item.created_at}</td>
              <td>In Stock</td>

              <td>
                <button>Add To Cart</button>

                <button
                  onClick={() => removeItem(item.product)}
                >
                  Remove
                </button>

              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}

export default WishlistPage;