function ProductCard({ product }) {
  return (
    <div className="border rounded-lg p-4 bg-white">

      <img
        src={product.image}
        alt={product.name}
        className="h-32 mx-auto"
      />

      <p className="text-sm text-gray-500 mt-2">vegetables</p>

      <h3 className="font-semibold">{product.name}</h3>

      <p className="text-yellow-500 text-sm">⭐ 4.8</p>

      <div className="flex justify-between items-center mt-2">
        <p className="font-bold">₹ {product.price}</p>

        <button className="bg-green-600 text-white px-3 py-1 rounded text-sm">
          Add
        </button>
      </div>

    </div>
  );
}

export default ProductCard;