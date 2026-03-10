function HeroSection() {
  return (
    <section className="bg-gray-100 px-12 py-16 flex items-center justify-between">

      {/* LEFT CONTENT */}
      <div className="max-w-xl">

        {/* Badge */}
        <div className="bg-pink-200 inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-6">
          🍜 The Best Online Grocery Store
        </div>

        {/* Heading */}
        <h1 className="text-5xl font-bold leading-tight mb-4">
          Your One ! Stop Shop <br />
          For <span className="text-green-700">Quality Groceries</span>
        </h1>

        {/* Description */}
        <p className="text-gray-600 mb-8">
          Online shop to connective and easy to for customer and quality the
          changes a delivery for the goods and healthy and quantity
        </p>

        {/* Buttons */}
        <div className="flex items-center gap-6 mb-8">
          <button className="bg-green-700 text-white px-6 py-3 rounded-full font-semibold">
            Shop Now →
          </button>

          <a href="#" className="underline text-lg">
            View All Products
          </a>
        </div>

        {/* Ratings */}
        <div className="flex items-center gap-3">
          <div className="flex -space-x-2">
            <img src="https://i.pravatar.cc/30?img=1" className="rounded-full"/>
            <img src="https://i.pravatar.cc/30?img=2" className="rounded-full"/>
            <img src="https://i.pravatar.cc/30?img=3" className="rounded-full"/>
            <img src="https://i.pravatar.cc/30?img=4" className="rounded-full"/>
          </div>

          <p className="text-sm">
            <b>4.8 Ratings</b> <br />
            Trusted by 75+ customers
          </p>
        </div>

      </div>


      {/* RIGHT IMAGE */}
      <div>
        <img
          src="/delivery.png"
          alt="delivery"
          className="w-[450px]"
        />
      </div>

    </section>
  );
}

export default HeroSection;