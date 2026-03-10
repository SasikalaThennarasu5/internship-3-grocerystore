import { useEffect, useState } from "react";
import ShopBanner from "../components/shop/ShopBanner";
import FilterSidebar from "../components/shop/FilterSidebar";
import ProductGrid from "../components/shop/ProductGrid";
import { getProducts } from "../services/productService";

function VegetablesPage() {

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

      <ShopBanner />

      <div className="flex p-10 gap-10">

        <FilterSidebar />

        <ProductGrid products={products} />

      </div>

    </div>
  );
}

export default VegetablesPage;