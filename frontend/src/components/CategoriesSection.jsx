import { useEffect, useState } from "react";
import { getCategories } from "../services/api";
import CategoryCard from "../components/CategoryCard";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

const CategoriesSection = () => {

const [categories,setCategories] = useState([]);

useEffect(()=>{
fetchCategories();
},[]);

const fetchCategories = async()=>{
try{
const data = await getCategories();
setCategories(data.results);
}catch(error){
console.error("Category fetch error:",error);
}
};

return(

<section className="py-16 bg-gray-100">

<div className="container mx-auto px-4">

<h4 className="text-green-600 text-center font-semibold mb-2">
Categories
</h4>

<h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
Featured <span className="text-green-600">Categories</span>
</h2>

<Swiper
modules={[Autoplay, Navigation]}
spaceBetween={30}
navigation
loop={true}
autoplay={{
delay:2500,
disableOnInteraction:false
}}
breakpoints={{
320:{slidesPerView:2},
480:{slidesPerView:3},
768:{slidesPerView:4},
1024:{slidesPerView:5},
1280:{slidesPerView:6}
}}
>

{categories.map((cat)=>(
<SwiperSlide key={cat.id}>
<CategoryCard category={cat}/>
</SwiperSlide>
))}

</Swiper>

</div>

</section>

);

};

export default CategoriesSection;