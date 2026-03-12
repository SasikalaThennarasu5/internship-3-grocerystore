import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaGoogle,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-green-700 text-white pt-16 pb-6">

      <div className="max-w-7xl mx-auto px-8">

        {/* 5 COLUMN GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">

          {/* COLUMN 1 */}
          <div>
            <div className="w-40 h-24 bg-gray-300 mb-5"></div>

            <p className="text-sm text-gray-200">
              Gregory is my beautiful gray Persian paw with the delicacy
              ballet dancer he slowly lifts and lowers....
            </p>

            {/* SOCIAL */}
            <div className="flex gap-3 mt-6">

              <div className="bg-blue-600 p-2 rounded-full">
                <FaFacebookF size={14} />
              </div>

              <div className="bg-blue-400 p-2 rounded-full">
                <FaTwitter size={14} />
              </div>

              <div className="bg-red-500 p-2 rounded-full">
                <FaGoogle size={14} />
              </div>

              <div className="bg-pink-500 p-2 rounded-full">
                <FaInstagram size={14} />
              </div>

              <div className="bg-blue-700 p-2 rounded-full">
                <FaLinkedinIn size={14} />
              </div>

              <div className="bg-black p-2 rounded-full">
                <FaGithub size={14} />
              </div>

            </div>
          </div>

          {/* COLUMN 2 */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Company</h3>

            <ul className="space-y-3 text-sm text-gray-200">
              <li><Link to="/about">About us</Link></li>
              <li><Link to="/blog">Blog</Link></li>
              <li><Link to="/contact">Contact us</Link></li>
              <li><Link to="/career">Career</Link></li>
            </ul>
          </div>

          {/* COLUMN 3 */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Customer services</h3>

            <ul className="space-y-3 text-sm text-gray-200">
              <li><Link to="/account">My Account</Link></li>
              <li><Link to="/track-order">Track your Order</Link></li>
              <li><Link to="/return">Return</Link></li>
              <li><Link to="/faq">FAQ</Link></li>
            </ul>
          </div>

          {/* COLUMN 4 */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Our Information</h3>

            <ul className="space-y-3 text-sm text-gray-200">
              <li><Link to="/privacy">Privacy</Link></li>
              <li><Link to="/terms">User Terms & Conditions</Link></li>
              <li><Link to="/return-policy">Return Policy</Link></li>
            </ul>
          </div>

          {/* COLUMN 5 */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact info</h3>

            <ul className="space-y-3 text-sm text-gray-200">
              <li>Phone number : 9183736373</li>
              <li>mg@gmail.com</li>
              <li>
                12 kk street <br />
                Chennai - 627006
              </li>
            </ul>
          </div>

        </div>

        {/* BOTTOM BAR */}
        <div className="border-t border-green-500 mt-12 pt-5 flex justify-between items-center text-sm text-gray-200">

          <p>
            Copyright © 2025
            <span className="text-yellow-300 ml-1">
              Grocery website design
            </span>
            . All Rights Reserved
          </p>

          <div className="flex items-center gap-4">
            <span>English ▼</span>
            <span>|</span>
            <span>🌐</span>
          </div>

        </div>

      </div>
    </footer>
  );
}

export default Footer;