import Newsletter from "../components/Newsletter";
import { FaCheckCircle, FaTruck, FaHeadphones, FaUndo } from "react-icons/fa";

function AboutPage() {
  return (
    <div className="bg-gray-100">

      {/* PAGE HEADER */}
      <div className="bg-yellow-200 py-10 text-center">
        <h1 className="text-3xl font-bold">About US</h1>
        <p className="text-sm mt-2">Home / About us</p>
      </div>


      {/* ABOUT SECTION */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 p-10">

        <img
          src="https://images.unsplash.com/photo-1607083206968-13611e3d76db"
          className="rounded-xl"
        />

        <div>
          <h3 className="text-gray-600 mb-2">About Us</h3>

          <h2 className="text-3xl font-bold mb-4">
            Your trusted Partner in
            <span className="text-green-600"> Fresh Grocery Delivery</span>
          </h2>

          <p className="text-gray-600 mb-6">
            Potassium and fiber their consumption one to regulate high
            blood pressure.
          </p>

          <div className="space-y-3">

            <div className="flex items-center gap-3">
              <FaCheckCircle className="text-yellow-500" />
              <p>ECO - Friendly and Sustainable Practices</p>
            </div>

            <div className="flex items-center gap-3">
              <FaCheckCircle className="text-yellow-500" />
              <p>ECO - Friendly and Sustainable Practices</p>
            </div>

            <div className="flex items-center gap-3">
              <FaCheckCircle className="text-yellow-500" />
              <p>ECO - Friendly and Sustainable Practices</p>
            </div>

          </div>
        </div>

      </div>


      {/* BIG IMAGE */}
      <div className="max-w-6xl mx-auto px-10 pb-10">
        <img
          src="https://images.unsplash.com/photo-1542838132-92c53300491e"
          className="rounded-xl w-full"
        />
      </div>


      {/* VISION + MISSION */}
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6 text-center pb-16">

        <div className="bg-white p-6 rounded shadow">
          <h3 className="font-semibold mb-2">Our Vision</h3>
          <p className="text-sm text-gray-600">
            Fresh grocery delivery helping customers live a healthy life.
          </p>
        </div>

        <div className="bg-white p-6 rounded shadow">
          <h3 className="font-semibold mb-2">Our Mission</h3>
          <p className="text-sm text-gray-600">
            Deliver fresh groceries quickly with best quality.
          </p>
        </div>

      </div>


      {/* TEAM */}
      <div className="max-w-6xl mx-auto text-center pb-16">

        <p className="text-green-600">Our Team</p>
        <h2 className="text-3xl font-bold mb-2">Meet The Passionate</h2>
        <p className="text-gray-600 mb-10">Team Behind Our Success</p>

        <div className="grid md:grid-cols-3 gap-8 px-10">

          <div className="bg-white p-4 rounded shadow">
            <img
              src="https://randomuser.me/api/portraits/men/32.jpg"
              className="rounded-lg mb-4"
            />
            <h3 className="font-semibold text-lg">David Shan</h3>
            <p className="text-sm text-gray-500">CEO / Founder</p>
          </div>

          <div className="bg-white p-4 rounded shadow">
            <img
              src="https://randomuser.me/api/portraits/women/44.jpg"
              className="rounded-lg mb-4"
            />
            <h3 className="font-semibold text-lg">Jenny</h3>
            <p className="text-sm text-gray-500">Operation Manager</p>
          </div>

          <div className="bg-white p-4 rounded shadow">
            <img
              src="https://randomuser.me/api/portraits/men/75.jpg"
              className="rounded-lg mb-4"
            />
            <h3 className="font-semibold text-lg">Hilton</h3>
            <p className="text-sm text-gray-500">Warehouse Manager</p>
          </div>

        </div>

      </div>

      {/* FEATURES + NEWSLETTER */}
      <Newsletter />
      
    </div>
  );
}

export default AboutPage;