import { useEffect, useState } from "react";
import { getCategories } from "../services/api";
import CategoryCard from "../components/CategoryCard";

const CategoriesSection = () => {

const [categories,setCategories] = useState([]);

useEffect(()=>{
fetchCategories();
},[]);

const fetchCategories = async()=>{

try{

const data = await getCategories();
setCategories(data);

}catch(error){
console.error("Category fetch error:",error);
}

};

return(

<section className="py-12 bg-gray-100">

<div className="container mx-auto">

<h4 className="text-green-600 text-center font-semibold">
Categories
</h4>

<h2 className="text-3xl font-bold text-center mb-10">
Featured <span className="text-green-600">Categories</span>
</h2>

<div className="flex gap-8 overflow-x-auto">

{categories.map((cat)=>(
<CategoryCard key={cat.id} category={cat}/>
))}

</div>

</div>

</section>

);

};

export default CategoriesSection;