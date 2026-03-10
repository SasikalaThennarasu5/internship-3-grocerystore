import { useEffect, useState } from "react";
import { getProducts } from "../services/productService";
import HeroSection from "../components/HeroSection";
import CategoriesSection from "../components/CategoriesSection";

function HomePage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    const data = await getProducts();
    setProducts(data);
  };

  return (
    <div>

      {/* HERO BANNER */}
      <HeroSection />

      {/* CATEGORIES */}
      <CategoriesSection />

      {/* PRODUCT SECTION */}
      <div className="p-10">
        <h1 className="text-3xl font-bold mb-6">Products</h1>

        <div className="grid grid-cols-4 gap-6">
          {products.map((product) => (
            <div key={product.id} className="border p-4 rounded">
              <h2 className="text-xl">{product.name}</h2>
              <p>₹{product.price}</p>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}

export default HomePage;