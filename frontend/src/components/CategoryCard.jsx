import { Link } from "react-router-dom";

function CategoryCard({ category }) {

const categoryImages = {
  vegetables: "/images/categories/vegetables.jpg",
  fruits: "/images/categories/fruits.jpg",
  drinks: "/images/categories/drinks.jpg",
  dairy: "/images/categories/dairy.jpg",
  bakery: "/images/categories/bakery.jpg",
  "milk & eggs": "/images/categories/milk-and-eggs.jpg",
  household: "/images/categories/household.jpg",
};

return (

<Link to={`/category/${category.id}`}>

<div className="flex flex-col items-center group cursor-pointer transition transform hover:scale-105">

<div className="w-32 h-32 rounded-full flex items-center justify-center bg-green-100 group-hover:bg-green-200 transition duration-300 shadow-md">

<img
src={categoryImages[category.name.toLowerCase()] || "/images/categories/default.jpg"}
alt={category.name}
className="w-full h-28 object-contain"
onError={(e)=>{
e.target.src="/images/categories/default.jpg"
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