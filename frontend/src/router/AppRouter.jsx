import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ShopPage from "../pages/ShopPage";
import ProductPage from "../pages/ProductPage";
import CartPage from "../pages/CartPage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import Navbar from "../components/Navbar";
import VegetablesPage from "../pages/VegetablesPage";

function AppRouter() {
  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/vegetables" element={<VegetablesPage />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;