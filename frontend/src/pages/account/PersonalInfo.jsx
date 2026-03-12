import { useEffect, useState } from "react";
import axios from "axios";

function PersonalInfo() {

  const [form, setForm] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    gender: ""
  });

  useEffect(() => {
    axios.get("/api/account/profile/")
      .then(res => setForm(res.data));
  }, []);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const updateProfile = () => {
    axios.put("/api/account/profile/", form)
      .then(() => alert("Profile updated"));
  };

  return (
    <div>

      <h2>Personal Information</h2>

      <input name="first_name" value={form.first_name} onChange={handleChange} placeholder="First Name" />
      <input name="last_name" value={form.last_name} onChange={handleChange} placeholder="Last Name" />
      <input name="email" value={form.email} onChange={handleChange} placeholder="Email" />
      <input name="phone" value={form.phone} onChange={handleChange} placeholder="Phone" />
      <input name="gender" value={form.gender} onChange={handleChange} placeholder="Gender" />

      <button onClick={updateProfile}>Update Changes</button>

    </div>
  );
}

export default PersonalInfo;