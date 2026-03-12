import { useEffect, useState } from "react";
import axios from "axios";

function ManageAddress() {

  const [addresses, setAddresses] = useState([]);

  useEffect(() => {
    axios.get("/api/address/")
      .then(res => setAddresses(res.data));
  }, []);

  return (
    <div>

      <h2>Manage Address</h2>

      {addresses.map(address => (
        <div key={address.id}>

          <p>{address.first_name} {address.last_name}</p>
          <p>{address.street_address}</p>

          <button>Delete</button>

        </div>
      ))}

    </div>
  );
}

export default ManageAddress;