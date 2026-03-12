import { useState } from "react";

function Newsletter() {

  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Subscribed:", email);
    setEmail("");
  };

  return (
    <div className="mt-16">

      {/* FEATURES SECTION */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6 text-center px-6 py-10">

        <div className="flex items-center gap-4 justify-center">
          <span className="text-3xl">📦</span>
          <div>
            <p className="font-semibold">Free shipping</p>
            <p className="text-sm text-gray-500">
              Free shipping for orders above ₹500
            </p>
          </div>
        </div>

        <div className="flex items-center gap-4 justify-center">
          <span className="text-3xl">💳</span>
          <div>
            <p className="font-semibold">Flexible Payment</p>
            <p className="text-sm text-gray-500">
              Multiple secure payment options
            </p>
          </div>
        </div>

        <div className="flex items-center gap-4 justify-center">
          <span className="text-3xl">🎧</span>
          <div>
            <p className="font-semibold">24 x 7 Support</p>
            <p className="text-sm text-gray-500">
              Support available all days
            </p>
          </div>
        </div>

      </div>

      {/* NEWSLETTER SECTION */}
      <div className="bg-gray-100 py-14">

        <div className="max-w-4xl mx-auto text-center px-6">

          <p className="text-gray-600 mb-2">Our Newsletter</p>

          <h2 className="text-3xl font-bold">
            Subscribe to Our Newsletter to
            <br />
            Get Updates on our latest offers
          </h2>

          <p className="text-gray-500 mt-2 text-sm">
            Get 25% on your order just by subscribing to newsletter
          </p>

          <form
            onSubmit={handleSubmit}
            className="flex justify-center gap-3 mt-6 flex-wrap"
          >

            <input
              type="email"
              placeholder="Enter Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="px-4 py-3 rounded-full w-80 border outline-none"
              required
            />

            <button
              type="submit"
              className="bg-yellow-400 px-6 py-3 rounded-full font-semibold"
            >
              subscribe
            </button>

          </form>

        </div>

      </div>

    </div>
  );
}

export default Newsletter;