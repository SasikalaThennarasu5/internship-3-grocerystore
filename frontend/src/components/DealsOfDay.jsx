import useCountdown from "../hooks/useCountdown";

const DealsOfDay = () => {

  const { days, hours, minutes, seconds } =
    useCountdown("2026-04-01");

  return (
    <section className="py-12 bg-gray-100">

      <div className="max-w-7xl mx-auto px-4">

        <p className="text-sm text-gray-500">Today Deals</p>

        <h2 className="text-3xl font-bold mb-8">
          Deals Of <span className="text-red-500">the Day</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          {/* Deal Card 1 */}
          <div className="bg-purple-100 p-6 rounded-lg flex gap-4">

            <img
              src="/images/products/fab-liquid.png"
              alt="Fab Liquid"
              className="w-32 object-contain"
            />

            <div>

              <span className="bg-gray-700 text-white text-xs px-2 py-1 rounded">
                25% OFF
              </span>

              <p className="text-sm text-gray-500 mt-2">
                Laundry supplies
              </p>

              <h3 className="font-bold text-lg">
                Goorej fab liquid
              </h3>

              <p className="text-xl font-bold">₹400</p>

              <button className="mt-3 bg-green-600 text-white px-4 py-1 rounded">
                ADD
              </button>

            </div>

          </div>

          {/* Deal Card 2 */}
          <div className="bg-purple-100 p-6 rounded-lg flex gap-4">

            <img
              src="/images/products/handwash.png"
              alt="Handwash"
              className="w-32 object-contain"
            />

            <div>

              <span className="bg-gray-700 text-white text-xs px-2 py-1 rounded">
                25% OFF
              </span>

              <p className="text-sm text-gray-500 mt-2">
                Personal care
              </p>

              <h3 className="font-bold text-lg">
                Aloe Neem Hand wash
              </h3>

              <p className="text-xl font-bold">₹300</p>

              <button className="mt-3 bg-green-600 text-white px-4 py-1 rounded">
                ADD
              </button>

            </div>

          </div>

          {/* Summer Banner */}
          <div className="bg-green-100 rounded-lg p-6 flex flex-col justify-center">

            <h3 className="text-2xl font-bold">
              Summer Discount
            </h3>

            <p className="text-gray-600 mt-2">
              Get 50% Off - Limited Time Offer
            </p>

            {/* Countdown Timer */}
            <div className="flex gap-6 mt-6 text-center">

              <div>
                <p className="text-xl font-bold">{days}</p>
                <span className="text-sm text-gray-500">Days</span>
              </div>

              <div>
                <p className="text-xl font-bold">{hours}</p>
                <span className="text-sm text-gray-500">Hours</span>
              </div>

              <div>
                <p className="text-xl font-bold">{minutes}</p>
                <span className="text-sm text-gray-500">Minutes</span>
              </div>

              <div>
                <p className="text-xl font-bold">{seconds}</p>
                <span className="text-sm text-gray-500">Seconds</span>
              </div>

            </div>

            <button className="mt-6 bg-green-600 text-white px-6 py-2 rounded-full">
              Shop Now
            </button>

          </div>

        </div>

      </div>

    </section>
  );
};

export default DealsOfDay;