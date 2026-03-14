import { useEffect, useState } from "react";
import api from "../api/axios";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";

function WishlistPage() {

const [wishlist, setWishlist] = useState([]);
const dispatch = useDispatch();

useEffect(() => {
  api.get("/wishlist/")
    .then(res => {

      console.log("Wishlist API:", res.data);

      if (Array.isArray(res.data)) {
        setWishlist(res.data);
      } 
      else if (Array.isArray(res.data.results)) {
        setWishlist(res.data.results);
      } 
      else if (Array.isArray(res.data.wishlist)) {
        setWishlist(res.data.wishlist);
      } 
      else {
        setWishlist([]);
      }

    })
    .catch(err => console.log(err));
}, []);


const removeItem = async (product_id) => {

  try {

    await api.delete(`/wishlist/remove/${product_id}/`);

    setWishlist(
      wishlist.filter(item => item.product !== product_id)
    );

  } catch (err) {
    console.log(err);
  }

};


const addToCartHandler = async (item) => {

  try {

    // 1️⃣ Add to Redux Cart
    dispatch(addToCart({
      id: item.product,
      name: item.product_name,
      price: item.price,
      image: `https://internship-3-grocerystore-2.onrender.com${item.product_image}`,
      quantity: 1
    }));

    // 2️⃣ Remove from wishlist (backend)
    await api.delete(`/wishlist/remove/${item.product}/`);

    // 3️⃣ Remove from UI
    setWishlist(prev =>
      prev.filter(i => i.product !== item.product)
    );

  } catch (err) {
    console.log(err);
  }

};


return (

<div className="max-w-6xl mx-auto px-6 py-10">

  <h1 className="text-3xl font-bold mb-8 text-center">
    Wishlist
  </h1>

  {wishlist.length === 0 ? (

    <p className="text-center text-gray-500">
      Your wishlist is empty
    </p>

  ) : (

    <table className="w-full border rounded-lg overflow-hidden">

      <thead className="bg-yellow-400">

        <tr className="text-left">

          <th className="p-4">Product</th>
          <th className="p-4">Price</th>
          <th className="p-4">Date Added</th>
          <th className="p-4">Stock Status</th>
          <th className="p-4"></th>

        </tr>

      </thead>

      <tbody>

        {wishlist.map(item => (

          <tr
            key={item.id}
            className="border-t"
          >

            <td className="p-4 flex items-center gap-4">

              <button
                onClick={() => removeItem(item.product)}
                className="text-red-500 text-lg"
              >
                ✕
              </button>

              <img
                src={`https://internship-3-grocerystore-2.onrender.com${item.product_image}`}
                alt={item.product_name}
                className="w-14 h-14 object-cover rounded border"
              />

              <div>

                <p className="font-semibold">
                  {item.product_name}
                </p>

                <p className="text-gray-500 text-sm">
                  {item.weight}
                </p>

              </div>

            </td>

            <td className="p-4">
              ₹ {item.price}
            </td>

            <td className="p-4">
              {new Date(item.created_at).toLocaleDateString()}
            </td>

            <td className="p-4 text-green-600">
              In Stock
            </td>

            <td className="p-4">

              <button
  onClick={() => addToCartHandler(item)}
  className="bg-green-600 text-white px-4 py-2 rounded"
>
  Add to Cart
</button>

            </td>

          </tr>

        ))}

      </tbody>

    </table>

  )}

</div>

);

}

export default WishlistPage;