import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { useSelector } from "react-redux";
import { FaShoppingBag, FaHeart, FaUser, FaBars, FaMapMarkerAlt } from "react-icons/fa";
import { AuthContext } from "../context/AuthContext";
import { useWishlist } from "../context/WishlistContext";

function Navbar() {

  const { wishlistCount } = useWishlist();
  const { user, setUser } = useContext(AuthContext);

  const cart = useSelector((state) => state.cart);
  const cartCount = cart.items.length;

  const [menuOpen, setMenuOpen] = useState(false);

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("access");
    localStorage.removeItem("refresh");
    setUser(null);
    navigate("/");
  };

  return (

    <div className="w-full">

      {/* TOP OFFER BAR */}
      <div className="bg-yellow-400 text-sm py-2 px-4 flex justify-between items-center flex-wrap">

        <div>call us : +91 9965765669</div>

        <div className="font-medium text-center">
          Sign up and GET 50%OFF for first order.
          <Link to="/register" className="ml-1 underline">
            Sign up now
          </Link>
        </div>

        <div className="flex gap-4 items-center">

          {user ? (
            <>
              <span>Hello, {user.first_name}</span>
              <button
                onClick={handleLogout}
                className="underline"
              >
                Logout
              </button>
            </>
          ) : (
            <Link to="/login">Login</Link>
          )}

          <Link to="/track-order">Track your order</Link>
          <Link to="/offers">All Offers</Link>

        </div>

      </div>

      {/* MAIN NAVBAR */}
      <div className="bg-green-700 text-white px-6 py-4">

        <div className="flex items-center justify-between">

          {/* LOGO */}
          <Link to="/" className="flex items-center gap-2 text-2xl font-bold">
            <FaShoppingBag />
            SHOP
          </Link>

          {/* LOCATION */}
          <div className="hidden lg:flex items-center gap-2">
            <FaMapMarkerAlt />
            <div className="text-sm">
              <p className="font-semibold">Location</p>
              <p className="text-xs">Tirunelveli, Tamil Nadu</p>
            </div>
          </div>

          {/* SEARCH */}
          <div className="hidden md:flex w-[400px]">

            <select className="bg-green-600 px-3 rounded-l text-sm">
              <option>All Categories</option>
              <option>Fruits</option>
              <option>Vegetables</option>
              <option>Beverages</option>
            </select>

            <input
              type="text"
              placeholder="Search for products"
              className="w-full px-4 text-black"
            />

            <button className="bg-green-500 px-4 rounded-r">
              🔍
            </button>

          </div>

          {/* ICONS */}
          <div className="flex items-center gap-6 text-xl">

            {/* Wishlist */}
            <Link to="/wishlist" className="relative">
              <FaHeart />

              {wishlistCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                  {wishlistCount}
                </span>
              )}

            </Link>

            {/* Cart */}
            <Link to="/cart" className="relative">

              <span className="text-xl">🛒</span>

              {cartCount > 0 && (
                <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                  {cartCount}
                </span>
              )}

            </Link>

            {/* Account */}
            {user ? (
              <Link to="/account">
                <FaUser />
              </Link>
            ) : (
              <Link to="/login">
                <FaUser />
              </Link>
            )}

            {/* MOBILE MENU */}
            <button
              className="md:hidden"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <FaBars />
            </button>

          </div>

        </div>

        {/* CATEGORY + MENU */}
        <div className="hidden md:flex items-center gap-8 mt-4">

          <button className="bg-yellow-400 text-black px-4 py-2 rounded font-medium">
            Browse All Categories
          </button>

          <div className="flex gap-6 text-sm font-medium">

            <Link to="/">Home</Link>

            <Link to="/shop">Shop</Link>

            <Link to="/category/3">Fruits</Link>

            <Link to="/category/2">Vegetables</Link>

            <Link to="/category/4">Beverages</Link>

            <Link to="/about">About us</Link>

            <Link to="/blogs">Blogs</Link>

            <Link to="/recent">Recently view</Link>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Navbar;