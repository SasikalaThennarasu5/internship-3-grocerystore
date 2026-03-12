import { Link } from "react-router-dom";

function AccountSidebar() {
  return (
    <div className="account-sidebar">

      <Link to="/account">Personal Information</Link>
      <Link to="/account/orders">My Order</Link>
      <Link to="/account/address">Manage Address</Link>
      <Link to="/account/payment">Payment Method</Link>
      <Link to="/account/password">Password Manager</Link>
      <Link to="/account/logout">Logout</Link>

    </div>
  );
}

export default AccountSidebar;