import { useEffect, useState } from "react";
import {
  getAddresses,
  createAddress,
  deleteAddress
} from "../../services/accountService";
import "./account.css";

function ManageAddress() {

  const [addresses, setAddresses] = useState([]);

  const [form, setForm] = useState({
    first_name: "",
    last_name: "",
    street_address: "",
    city: "",
    state: "",
    zip_code: "",
    phone: "",
    email: "",
    country: ""
  });

  const loadAddresses = async () => {
    try {
      const res = await getAddresses();
      setAddresses(res.data);
    } catch (error) {
      console.error("Address load error", error);
    }
  };

  useEffect(() => {
    loadAddresses();
  }, []);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleAddAddress = async () => {

    try {

      await createAddress(form);

      setForm({
        first_name: "",
        last_name: "",
        street_address: "",
        city: "",
        state: "",
        zip_code: "",
        phone: "",
        email: "",
        country: ""
      });

      loadAddresses();

    } catch (error) {
      console.error("Create address error", error);
    }

  };

  const handleDelete = async (id) => {

    try {
      await deleteAddress(id);
      loadAddresses();
    } catch (error) {
      console.error("Delete address error", error);
    }

  };

  return (
    <div className="manage-address">

      <h2>Manage Address</h2>

      {/* Address Form */}

      <div className="address-form">

        <input name="first_name" placeholder="First Name" value={form.first_name} onChange={handleChange}/>
        <input name="last_name" placeholder="Last Name" value={form.last_name} onChange={handleChange}/>
        <input name="street_address" placeholder="Street Address" value={form.street_address} onChange={handleChange}/>
        <input name="city" placeholder="City" value={form.city} onChange={handleChange}/>
        <input name="state" placeholder="State" value={form.state} onChange={handleChange}/>
        <input name="zip_code" placeholder="Zip Code" value={form.zip_code} onChange={handleChange}/>
        <input name="phone" placeholder="Phone" value={form.phone} onChange={handleChange}/>
        <input name="email" placeholder="Email" value={form.email} onChange={handleChange}/>
        <input name="country" placeholder="Country" value={form.country} onChange={handleChange}/>

        <button onClick={handleAddAddress}>
          Add Address
        </button>

      </div>

      {/* Address List */}

      <div className="address-list">

        {addresses.map(address => (

          <div key={address.id} className="address-card">

            <p>
              {address.first_name} {address.last_name}
            </p>

            <p>{address.street_address}</p>

            <p>
              {address.city}, {address.state} {address.zip_code}
            </p>

            <p>{address.phone}</p>

            <button onClick={() => handleDelete(address.id)}>
              Delete
            </button>

          </div>

        ))}

      </div>

    </div>
  );
}

export default ManageAddress;