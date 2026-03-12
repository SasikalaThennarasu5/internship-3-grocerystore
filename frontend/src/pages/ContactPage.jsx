import Newsletter from "../components/Newsletter";

function ContactPage() {
  return (
    <div className="bg-gray-100">

      {/* PAGE HEADER */}
      <div className="bg-yellow-200 py-10 text-center">
        <h1 className="text-3xl font-bold">CONTACT US</h1>
        <p className="text-sm mt-2">Home / Contact us</p>
      </div>


      {/* CONTACT FORM SECTION */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 p-10">

        {/* FORM */}
        <form className="space-y-4">

          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="First Name *"
              className="border rounded-lg p-3 w-full"
            />

            <input
              type="text"
              placeholder="Last Name *"
              className="border rounded-lg p-3 w-full"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <input
              type="email"
              placeholder="Email *"
              className="border rounded-lg p-3 w-full"
            />

            <input
              type="text"
              placeholder="Phone *"
              className="border rounded-lg p-3 w-full"
            />
          </div>

          <input
            type="text"
            placeholder="Subject *"
            className="border rounded-lg p-3 w-full"
          />

          <textarea
            placeholder="Your message *"
            rows="5"
            className="border rounded-lg p-3 w-full"
          ></textarea>

          <button className="bg-green-600 text-white px-6 py-2 rounded-full">
            Send a Message
          </button>

        </form>


        {/* IMAGE */}
        <div>
          <img
            src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d"
            className="rounded-xl"
          />
        </div>

      </div>


      {/* CONTACT CARDS */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6 px-10 pb-12">

        <div className="bg-pink-100 p-6 text-center rounded-xl">
          <div className="bg-yellow-400 w-10 h-10 mx-auto rounded flex items-center justify-center mb-3">
            📍
          </div>
          <h3 className="font-semibold">Address</h3>
          <p className="text-sm text-gray-600">
            12 kk street <br />
            Chennai
          </p>
        </div>

        <div className="bg-pink-100 p-6 text-center rounded-xl">
          <div className="bg-yellow-400 w-10 h-10 mx-auto rounded flex items-center justify-center mb-3">
            📞
          </div>
          <h3 className="font-semibold">Phone</h3>
          <p className="text-sm text-gray-600">0705868796</p>
        </div>

        <div className="bg-pink-100 p-6 text-center rounded-xl">
          <div className="bg-yellow-400 w-10 h-10 mx-auto rounded flex items-center justify-center mb-3">
            ✉️
          </div>
          <h3 className="font-semibold">Email</h3>
          <p className="text-sm text-gray-600">example@gmail.com</p>
        </div>

      </div>


      {/* MAP */}
      <div className="max-w-6xl mx-auto px-10 pb-16">

        <iframe
          title="map"
          src="https://maps.google.com/maps?q=chennai&t=&z=13&ie=UTF8&iwloc=&output=embed"
          className="w-full h-80 rounded-xl border"
        ></iframe>

      </div>


      {/* NEWSLETTER + FEATURES */}
      <Newsletter />

    </div>
  );
}

export default ContactPage;