import { Link } from "react-router-dom";

function CategoryCard({ category }) {

const categoryImages = {
  vegetables: "/images/categories/vegetables.png",
  fruits: "/images/categories/fruits.png",
  drinks: "/images/categories/drinks.png",
  dairy: "/images/categories/dairy.png",
  bakery: "/images/categories/bakery.png",
  "milk & eggs": "/images/categories/milk-and-eggs.png",
  household: "/images/categories/household.png",
};

return (

<Link to={`/category/${category.id}`}>

<div className="flex flex-col items-center group cursor-pointer transition transform hover:scale-105">

<div className="w-32 h-32 rounded-full flex items-center justify-center bg-green-100 group-hover:bg-green-200 transition duration-300 shadow-md">

<img
src={categoryImages[category.name.toLowerCase()] || "/images/categories/default.png"}
alt={category.name}
className="w-full h-28 object-contain"
onError={(e)=>{
e.target.src="/images/categories/default.png"
}}
/>

</div>

<h3 className="mt-4 font-semibold text-gray-800">
{category.name}
</h3>

<p className="text-sm text-green-600">
{category.products_count} products
</p>

</div>

</Link>

);

}

export default CategoryCard;