import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

function LoginPage() {

  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      const res = await axios.post(
        "http://127.0.0.1:8000/api/auth/login/",
        form
      );

      localStorage.setItem("access", res.data.access);
      localStorage.setItem("refresh", res.data.refresh);

      navigate("/");

    } catch (error) {
      alert("Login failed");
    }

  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">

      <div className="flex w-[900px] bg-white shadow-xl rounded-lg overflow-hidden">

        {/* LEFT */}
        <div className="w-1/2 bg-green-900 text-white flex flex-col justify-center items-center p-10">

          <h2 className="text-4xl font-bold mb-6">WELCOME</h2>

          <form onSubmit={handleSubmit} className="w-full space-y-4">

            <input
              name="email"
              placeholder="Email"
              className="w-full p-2 rounded text-black"
              onChange={handleChange}
            />

            <input
              type="password"
              name="password"
              placeholder="Password"
              className="w-full p-2 rounded text-black"
              onChange={handleChange}
            />

            <button className="bg-yellow-400 text-black w-full py-2 rounded font-semibold">
              LOG IN
            </button>

          </form>

          {/* Register Button */}
          <Link
            to="/register"
            className="mt-4 block text-center bg-white text-green-900 py-2 rounded font-semibold w-full"
          >
            Register Now
          </Link>

          <p className="text-sm mt-2 underline cursor-pointer">
            Forgot Password?
          </p>

        </div>

        {/* RIGHT */}
        <div className="w-1/2 bg-yellow-400 flex items-center justify-center">

          <img
            src="/login-illustration.png"
            className="w-60"
          />

        </div>

      </div>

    </div>
  );
}

export default LoginPage;