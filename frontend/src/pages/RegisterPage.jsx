import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

function RegisterPage() {

  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirm_password: ""
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (form.password !== form.confirm_password) {
      alert("Passwords do not match");
      return;
    }

    try {
      await axios.post("http://127.0.0.1:8000/api/auth/register/", {
        username: form.name,
        email: form.email,
        phone: form.phone,
        password: form.password
      });

      alert("Registration successful");
      navigate("/login");

    } catch (error) {
      console.log(error);
      alert("Registration failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">

      <div className="flex w-[900px] bg-white shadow-xl rounded-lg overflow-hidden">

        {/* LEFT */}
        <div className="w-1/2 bg-green-700 text-white p-10">

          <h2 className="text-4xl font-bold mb-8">Register</h2>

          <form onSubmit={handleSubmit} className="space-y-4">

            <input
              name="name"
              placeholder="Name"
              className="w-full p-2 rounded text-black"
              onChange={handleChange}
            />

            <input
              name="email"
              placeholder="Email"
              className="w-full p-2 rounded text-black"
              onChange={handleChange}
            />

            <input
              name="phone"
              placeholder="Phone Number"
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

            <input
              type="password"
              name="confirm_password"
              placeholder="Confirm Password"
              className="w-full p-2 rounded text-black"
              onChange={handleChange}
            />

            <button className="bg-yellow-400 text-black w-full py-2 rounded font-semibold">
              Register
            </button>

          </form>

          <p className="mt-4">
            Have account ?{" "}
            <Link to="/login" className="underline">
              Sign in
            </Link>
          </p>

        </div>

        {/* RIGHT */}
        <div className="w-1/2 bg-yellow-400"></div>

      </div>

    </div>
  );
}

export default RegisterPage;