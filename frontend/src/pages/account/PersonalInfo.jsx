import { useEffect, useState } from "react";
import { getProfile, updateProfile } from "../../services/accountService";
import "./account.css";

function PersonalInfo() {

  const [form, setForm] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    gender: ""
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const fetchProfile = async () => {
      try {
        const res = await getProfile();

        setForm({
          first_name: res.data.first_name || "",
          last_name: res.data.last_name || "",
          email: res.data.email || "",
          phone: res.data.phone || "",
          gender: res.data.gender || ""
        });

      } catch (error) {
        console.error("Profile load error", error);
      }

      setLoading(false);
    };

    fetchProfile();

  }, []);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async () => {

    try {

      const payload = {
        user: {
          first_name: form.first_name,
          last_name: form.last_name,
          email: form.email
        },
        phone: form.phone,
        gender: form.gender
      };

      await updateProfile(payload);

      alert("Profile updated successfully");

    } catch (error) {
      console.error("Update error", error);
      alert("Failed to update profile");
    }

  };

  if (loading) {
    return <p>Loading profile...</p>;
  }

  return (
  <div className="personal-info">

    <h2>Personal Information</h2>

    <div className="profile-wrapper">

      {/* Avatar */}
      <div className="profile-avatar">
        <img
          src="https://i.pravatar.cc/80"
          alt="profile"
        />
      </div>

      {/* Form */}
      <div className="profile-form">

        <div className="form-group">
          <label>First Name *</label>
          <input
            name="first_name"
            value={form.first_name}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Last Name *</label>
          <input
            name="last_name"
            value={form.last_name}
            onChange={handleChange}
          />
        </div>

        <div className="form-group full">
          <label>Email *</label>
          <input
            name="email"
            value={form.email}
            onChange={handleChange}
          />
        </div>

        <div className="form-group full">
          <label>Phone *</label>
          <input
            name="phone"
            value={form.phone}
            onChange={handleChange}
          />
        </div>

        <div className="form-group full">
          <select name="gender" value={form.gender} onChange={handleChange}>
  <option value="">Select Gender</option>
  <option value="male">Male</option>
  <option value="female">Female</option>
</select>
        </div>

        <button className="update-btn" onClick={handleSubmit}>
          Update Changes
        </button>

      </div>

    </div>

  </div>
);
}

export default PersonalInfo;