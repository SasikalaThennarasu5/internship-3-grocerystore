import { Link } from "react-router-dom";

function HeroSection() {
  return (
    <section className="bg-white-100 px-12 py-15 flex items-center justify-between relative overflow-hidden">

      {/* LEFT CONTENT */}
      <div className="max-w-xl">

        {/* Badge */}
        <div className="bg-pink-200 inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm font-semibold mb-6">
          🍜 The Best Online Grocery Store
        </div>

        {/* Heading */}
        <h1 className="text-5xl font-bold leading-tight mb-6">
          Your One ! Stop Shop <br />
          For <span className="text-green-700">Quality Groceries</span>
        </h1>

        {/* Description */}
        <p className="text-gray-600 mb-8 leading-relaxed">
          Online shop to connect easily with customers and deliver
          healthy groceries with the best quality and quantity.
        </p>

        {/* Buttons */}
        <div className="flex items-center gap-6 mb-8">

          <Link
            to="/shop"
            className="bg-green-700 hover:bg-green-800 transition text-white px-7 py-3 rounded-full font-semibold flex items-center gap-2"
          >
            Shop Now →
          </Link>

          <Link
            to="/products"
            className="underline text-lg text-gray-800 hover:text-green-700"
          >
            View All Products
          </Link>

        </div>

        {/* Ratings */}
        <div className="flex items-center gap-4">

          <div className="flex -space-x-2">
            <img src="https://i.pravatar.cc/30?img=1" className="rounded-full border-2 border-white"/>
            <img src="https://i.pravatar.cc/30?img=2" className="rounded-full border-2 border-white"/>
            <img src="https://i.pravatar.cc/30?img=3" className="rounded-full border-2 border-white"/>
            <img src="https://i.pravatar.cc/30?img=4" className="rounded-full border-2 border-white"/>
          </div>

          <p className="text-sm">
            ⭐ <b>4.8 Ratings</b> <br />
            Trusted by 75+ customers
          </p>

        </div>

      </div>


      {/* RIGHT SIDE */}
      <div className="relative">

        {/* Delivery Image */}
        <img
          src="/delivery.png"
          alt="delivery"
          className="w-[800px] relative z-10"
        />

        {/* Secure Payment Card */}
        <div className="absolute top-10 left-[-40px] bg-white shadow-lg rounded-full px-4 py-2 flex items-center gap-2 text-sm">
          🛡️ secure payments
        </div>

        {/* Fast Delivery Card */}
        <div className="absolute bottom-16 left-[-60px] bg-white shadow-lg rounded-full px-4 py-2 flex items-center gap-2 text-sm">
          🚚 Fast delivery
        </div>

        {/* Decorative dots */}
        <div className="absolute top-6 right-6 w-4 h-4 bg-pink-500 rounded-full"></div>
        <div className="absolute bottom-10 right-20 w-4 h-4 bg-yellow-400 rounded-full"></div>
        <div className="absolute top-24 right-0 w-4 h-4 bg-purple-600 rounded-full"></div>

      </div>

    </section>
  );
}

export default HeroSection;