import { useEffect, useState } from "react";
import { getProducts } from "../services/productService";

import HeroSection from "../components/HeroSection";
import CategoriesSection from "../components/CategoriesSection";
import PromoBanners from "../components/PromoBanners";
import FeaturedProducts from "../components/product/FeaturedProducts";
import DealsOfDay from "../components/DealsOfDay";
import WeeklyDeals from "../components/WeeklyDeals";
import BestSellerProducts from "../components/product/BestSellerProducts";

function HomePage() {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {

      const data = await getProducts();
      setProducts(data || []);

    } catch (error) {

      console.error("Product fetch error:", error);
      setProducts([]);

    }
  };

  return (

    <div>

      {/* HERO */}
      <HeroSection />

      {/* CATEGORIES */}
      <CategoriesSection />

      {/* PROMO CARDS */}
      <PromoBanners />

      {/* FEATURED PRODUCTS */}
      <FeaturedProducts products={products} />

      {/* DEALS OF THE DAY */}
      <DealsOfDay />

      {/* WEEKLY DEALS BANNER */}
      <WeeklyDeals />

      {/* BEST SELLER SLIDER */}
      <BestSellerProducts products={products} />

    </div>

  );

}

export default HomePage;