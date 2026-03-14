import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../components/product/ProductCard";
import FilterSidebar from "../components/shop/FilterSidebar";
import api from "../api/axios";

function CategoryPage() {

  const { id } = useParams();

  const [products, setProducts] = useState([]);

  useEffect(() => {
  api.get(`/categories/${id}/products/`)
    .then(res => {
      setProducts(res.data.results || res.data);
    })
    .catch(err => console.log(err));
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