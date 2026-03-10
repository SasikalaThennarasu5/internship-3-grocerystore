import ProductCard from "./ProductCard";

function ProductGrid({ products }) {
  return (
    <div className="grid grid-cols-3 gap-6 flex-1">

      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}

    </div>
  );
}

export default ProductGrid;