import { useState } from "react";
import { changePassword } from "../../services/accountService";

function PasswordManager() {

  const [form, setForm] = useState({
    old_password: "",
    new_password: "",
    confirm_password: ""
  });

  const handleChange = (e) => {

    setForm({
      ...form,
      [e.target.name]: e.target.value
    });

  };

  const handleSubmit = async () => {

    if (form.new_password !== form.confirm_password) {
      alert("Passwords do not match");
      return;
    }

    try {

      await changePassword({
        old_password: form.old_password,
        new_password: form.new_password
      });

      alert("Password updated successfully");

      setForm({
        old_password: "",
        new_password: "",
        confirm_password: ""
      });

    } catch (error) {

      console.error(error);
      alert("Failed to change password");

    }

  };

  return (
    <div className="password-manager">

      <h2>Password Manager</h2>

      <input
        type="password"
        name="old_password"
        placeholder="Old Password"
        value={form.old_password}
        onChange={handleChange}
      />

      <input
        type="password"
        name="new_password"
        placeholder="New Password"
        value={form.new_password}
        onChange={handleChange}
      />

      <input
        type="password"
        name="confirm_password"
        placeholder="Confirm New Password"
        value={form.confirm_password}
        onChange={handleChange}
      />

      <button onClick={handleSubmit}>
        Update Password
      </button>

    </div>
  );
}

export default PasswordManager;