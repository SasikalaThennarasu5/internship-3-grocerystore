const WeeklyDeals = () => {
  return (
    <section className="py-10">

      <div className="max-w-7xl mx-auto px-4">

        <div className="bg-green-700 text-white rounded-xl p-10 flex items-center justify-between">

          <div>

            <p className="text-yellow-300 text-sm">
              Weekly Deals
            </p>

            <h2 className="text-3xl font-bold mt-2">
              Unbeatable Offer : Your
              <br />
              Weekly Grocery Specials
            </h2>

            <p className="text-sm text-gray-200 mt-3">
              set for the under for healthy for the foods for the delivery
            </p>

            <button className="mt-6 bg-yellow-400 text-black px-6 py-2 rounded-full font-semibold">
              Shop Now
            </button>

          </div>

          <img
            src="/images/banners/basket.png"
            className="w-100 object-contain"
          />

        </div>

      </div>

    </section>
  );
};

export default WeeklyDeals;