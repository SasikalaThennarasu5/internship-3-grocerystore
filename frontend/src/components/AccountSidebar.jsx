import { NavLink } from "react-router-dom";
import "./AccountSidebar.css";

function AccountSidebar() {
  return (
    <div className="account-sidebar">

      <NavLink to="/account" end>Personal Information</NavLink>

      <NavLink to="/account/orders">My Order</NavLink>

      <NavLink to="/account/address">Manage Address</NavLink>

      <NavLink to="/account/payment">Payment Method</NavLink>

      <NavLink to="/account/password">Password Manager</NavLink>

      <NavLink to="/account/logout">Logout</NavLink>

    </div>
  );
}

export default AccountSidebar;        

