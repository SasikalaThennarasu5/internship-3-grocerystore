import { Link } from "react-router-dom";
import { useState } from "react";

import { FaShoppingBag } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaBars } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";

function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="w-full">

      {/* TOP OFFER BAR */}
      <div className="bg-yellow-400 text-sm py-2 px-4 flex justify-between items-center flex-wrap">

        <div>call as : +91 9965765669</div>

        <div className="font-medium text-center">
          Sign up and GET 50%OFF for first order.
          <Link to="/register" className="ml-1 underline">
            Sign up now
          </Link>
        </div>

        <div className="flex gap-4">
          <span>Deliver to 411017</span>

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

            <Link to="/wishlist">
              <FaHeart />
            </Link>

            <Link to="/cart">
              🛒
            </Link>

            <Link to="/account">
              <FaUser />
            </Link>

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

          {/* BROWSE BUTTON */}
          <button className="bg-yellow-400 text-black px-4 py-2 rounded font-medium">
            Browse All Categories
          </button>

          {/* NAV LINKS */}
          <div className="flex gap-6 text-sm font-medium">

            <Link to="/">Home</Link>

            <Link to="/shop">Shop</Link>

            <Link to="/category/1">Fruits</Link>

            <Link to="/category/2">Vegetables</Link>

            <Link to="/category/3">Beverages</Link>

            <Link to="/about">About us</Link>

            <Link to="/blogs">Blogs</Link>

            <Link to="/recent">Recently view</Link>

          </div>

        </div>

      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="bg-green-700 text-white p-6 flex flex-col gap-4 md:hidden">

          <Link to="/">Home</Link>
          <Link to="/shop">Shop</Link>
          <Link to="/fruits">Fruits</Link>
          <Link to="/vegetables">Vegetables</Link>
          <Link to="/beverages">Beverages</Link>
          <Link to="/about">About us</Link>
          <Link to="/blogs">Blogs</Link>

        </div>
      )}

    </div>
  );
}

export default Navbar;