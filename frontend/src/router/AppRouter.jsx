import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ShopPage from "../pages/ShopPage";
import ProductPage from "../pages/ProductPage";
import CartPage from "../pages/CartPage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import Navbar from "../components/Navbar";
import CategoryPage from "../pages/CategoryPage";
import CheckoutPage from "../pages/CheckoutPage";
import OrderCompletePage from "../pages/OrderCompletePage";
import Footer from "../components/Footer";
import AboutPage from "../pages/AboutPage";
import ContactPage from "../pages/ContactPage";
/* Account pages */
import AccountLayout from "../pages/account/AccountLayout";
import PersonalInfo from "../pages/account/PersonalInfo";
import MyOrders from "../pages/account/MyOrders";
import ManageAddress from "../pages/account/ManageAddress";
import PaymentMethod from "../pages/account/PaymentMethod";
import PasswordManager from "../pages/account/PasswordManager";
import Logout from "../pages/account/Logout";
import FaqPage from "../pages/FaqPage";
import WishlistPage from "../pages/WishlistPage";
import TrackOrderPage from "../pages/TrackOrderPage";
import OrderStatusPage from "../pages/OrderStatusPage";

function AppRouter() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>

        {/* existing pages */}
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/wishlist" element={<WishlistPage />} />
        <Route path="/track-order" element={<TrackOrderPage />} />
        <Route path="/order-status/:id" element={<OrderStatusPage />} />
        <Route path="/order-complete/:id" element={<OrderCompletePage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/category/:category" element={<CategoryPage />} />
        <Route path="/faq" element={<FaqPage />} />
        <Route path="/contact" element={<ContactPage />} />

        {/* Account pages */}
        <Route path="/account" element={<AccountLayout />}>

          <Route index element={<PersonalInfo />} />
          <Route path="orders" element={<MyOrders />} />
          <Route path="address" element={<ManageAddress />} />
          <Route path="payment" element={<PaymentMethod />} />
          <Route path="password" element={<PasswordManager />} />
          <Route path="logout" element={<Logout />} />

        </Route>

      </Routes>

     <Footer />

    </BrowserRouter>
  );
}

export default AppRouter;