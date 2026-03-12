import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartSlice";
import { Heart } from "lucide-react";
import { useWishlist } from "../../context/WishlistContext";

function ProductCard({ product }) {

  const dispatch = useDispatch();
  const { toggleWishlist } = useWishlist();

  return (
    <div className="bg-white rounded-lg shadow-sm border p-3 relative">

      {/* Discount */}
      <span className="absolute top-2 left-2 bg-gray-700 text-white text-xs px-2 py-1 rounded">
        {product.discount || 50}% Off
      </span>

      {/* Wishlist */}
      <button
        className="absolute top-3 right-3"
        onClick={(e) => {
          e.stopPropagation();
          toggleWishlist(product);
        }}
      >
        <Heart size={18} />
      </button>

      {/* Product Image */}
      <img
        src={product.image}
        alt={product.name}
        className="h-40 w-full object-contain"
      />

      {/* Category */}
      <p className="text-xs text-gray-400 mt-2">
        {product.category_name}
      </p>

      {/* Product Name */}
      <h3 className="font-semibold">
        {product.name}
      </h3>

      {/* Rating */}
      <div className="flex justify-between items-center mt-1">
        <span className="text-yellow-500 text-sm">
          ⭐ {product.rating || 4.5}
        </span>
      </div>

      {/* Price */}
      <div className="flex items-center gap-2 mt-2">
        <span className="font-bold text-lg">
          ₹ {product.price}
        </span>

        <span className="text-gray-400 line-through text-sm">
          ₹ {product.price + 100}
        </span>
      </div>

      {/* Buttons */}
      <div className="flex gap-2 mt-3">

        <button
          onClick={() => dispatch(addToCart(product))}
          className="bg-green-600 text-white px-3 py-1 rounded-full"
        >
          ADD
        </button>

        <Link
          to={`/product/${product.id}`}
          className="flex-1 bg-yellow-400 text-center text-sm py-1 rounded"
        >
          Buy now
        </Link>

      </div>

    </div>
  );
}

export default ProductCard;