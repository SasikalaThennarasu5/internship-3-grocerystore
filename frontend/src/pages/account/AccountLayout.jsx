import AccountSidebar from "../../components/AccountSidebar";
import { Outlet } from "react-router-dom";

function AccountLayout() {
  return (
    <div className="account-container">

      <AccountSidebar />

      <div className="account-content">
        <Outlet />
      </div>

    </div>
  );
}

export default AccountLayout;