import ProductCard from "../product/ProductCard";

function ProductGrid({ products }) {

return (

<div className="grid grid-cols-3 gap-6">

{products.map(product => (

<ProductCard
key={product.id}
product={product}
/>

))}

</div>

)

}

export default ProductGrid