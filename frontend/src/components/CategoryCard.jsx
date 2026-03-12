const CategoryCard = ({ category }) => {
  return (
    <div className="flex flex-col items-center min-w-[120px]">

      <div className="w-24 h-24 rounded-full bg-green-100 flex items-center justify-center">
        <img
          src={category.image}
          alt={category.name}
          className="w-14 h-14 object-contain"
        />
      </div>

      <h3 className="mt-3 font-semibold">{category.name}</h3>

      <p className="text-sm text-gray-500">
        {category.productCount} products
      </p>

    </div>
  );
};

export default CategoryCard;