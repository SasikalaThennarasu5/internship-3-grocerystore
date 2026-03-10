import { Heart, ShoppingBag, User, Search, MapPin, Truck } from "lucide-react";

function Navbar() {
  return (
    <div className="w-full">

      {/* TOP BAR */}
      <div className="bg-yellow-400 text-black text-sm flex justify-between px-10 py-2">
        <p>call us : +91 996576569</p>

        <p className="font-semibold">
          Sign up and GET 50%OFF for first order . 
          <span className="underline ml-1 cursor-pointer">Sign up now</span>
        </p>

        <div className="flex gap-6">
          <p>Deliver to <b>411017</b></p>
          <p className="flex items-center gap-1">
            <Truck size={16} /> Track your order
          </p>
          <p>All Offers</p>
        </div>
      </div>


      {/* MAIN NAVBAR */}
      <div className="bg-green-700 text-white flex items-center px-10 py-5 gap-10">

        {/* LOGO */}
        <div className="flex items-center gap-3">
          <div className="bg-yellow-300 rounded-xl p-5 text-black font-bold">
            SHOP
          </div>
        </div>

        {/* LOCATION */}
        <div>
          <p className="text-gray-200 text-sm">Location</p>
          <p className="flex items-center gap-1 font-semibold">
            <MapPin size={16} /> Tirunelveli, Tamil Nadu
          </p>
        </div>

        {/* SEARCH */}
        <div className="flex flex-1 bg-green-600 rounded-full overflow-hidden">
          <select className="bg-green-600 px-4 outline-none">
            <option>All Categories</option>
          </select>

          <input
            type="text"
            placeholder="Search for products"
            className="flex-1 px-4 py-2 bg-green-600 outline-none"
          />

          <button className="bg-green-500 px-5">
            <Search />
          </button>
        </div>

        {/* ICONS */}
        <div className="flex gap-6">
          <Heart className="cursor-pointer" />
          <ShoppingBag className="cursor-pointer" />
          <User className="cursor-pointer" />
        </div>
      </div>


      {/* CATEGORY MENU */}
      <div className="bg-green-800 text-white flex items-center px-10 py-4 gap-10">

        <button className="bg-yellow-400 text-black px-5 py-2 rounded-lg font-semibold">
          Browse All Categories
        </button>

        <div className="flex gap-8">
          <a href="/">Home</a>
          <a href="/shop">Shop</a>
          <a href="/">Fruits</a>
          <a href="/">Vegtables</a>
          <a href="/">Beverages</a>
          <a href="/">About us</a>
          <a href="/">Blogs</a>
        </div>

        <p className="ml-auto text-yellow-400">Recently view</p>

      </div>

    </div>
  );
}

export default Navbar;