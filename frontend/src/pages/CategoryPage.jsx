import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../components/product/ProductCard";
import FilterSidebar from "../components/shop/FilterSidebar"

function CategoryPage() {

  const { id } = useParams();

  const [products, setProducts] = useState([]);

  useEffect(() => {

    fetch(`http://127.0.0.1:8000/api/products/categories/${id}/products/`)
      .then(res => res.json())
      .then(data => setProducts(data));

  }, [id]);

  return (
    <div className="max-w-7xl mx-auto grid grid-cols-4 gap-6 mt-6">

      <FilterSidebar />

      <div className="col-span-3 grid grid-cols-3 gap-6">

        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}

      </div>

    </div>
  );
}

export default CategoryPage;