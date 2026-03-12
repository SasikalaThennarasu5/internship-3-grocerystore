import { useState } from "react";
import axios from "axios";

function PasswordManager() {

  const [data, setData] = useState({
    old_password: "",
    new_password: ""
  });

  const changePassword = () => {
    axios.post("/api/account/change-password/", data)
      .then(() => alert("Password changed"));
  };

  return (
    <div>

      <h2>Password Manager</h2>

      <input
        type="password"
        placeholder="Old Password"
        onChange={(e) => setData({...data, old_password: e.target.value})}
      />

      <input
        type="password"
        placeholder="New Password"
        onChange={(e) => setData({...data, new_password: e.target.value})}
      />

      <button onClick={changePassword}>Update Password</button>

    </div>
  );
}

export default PasswordManager;