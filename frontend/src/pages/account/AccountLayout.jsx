import { Outlet, NavLink } from "react-router-dom";
import "./account.css";

const AccountLayout = () => {
  return (
    <div className="account-wrapper">

      <div className="account-header">
        <h2>Account</h2>
        <p>Home / Account</p>
      </div>

      <div className="account-container">

        {/* Sidebar */}
        <div className="account-sidebar">
          <NavLink to="/account/">Personal Information</NavLink>
          <NavLink to="/account/orders">My Order</NavLink>
          <NavLink to="/account/address">Manage Address</NavLink>
          <NavLink to="/account/payment">Payment Method</NavLink>
          <NavLink to="/account/password">Password Manager</NavLink>
          <NavLink to="/login">Logout</NavLink>
        </div>

        {/* Page Content */}
        <div className="account-content">
          <Outlet />
        </div>

      </div>
    </div>
  );
};

export default AccountLayout;