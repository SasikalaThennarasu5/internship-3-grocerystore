import { Link } from "react-router-dom";

const CategoryCard = ({ category }) => {

return (

<Link to={`/category/${category.id}`}>

<div className="flex flex-col items-center group cursor-pointer transition transform hover:scale-105">

<div className="
w-32 h-32
rounded-full
flex items-center justify-center
bg-green-100
group-hover:bg-green-200
transition
duration-300
shadow-md
">

<img
src={category.image}
alt={category.name}
className="w-16 h-16 object-contain"
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

};

export default CategoryCard;