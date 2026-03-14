import useCountdown from "../hooks/useCountdown";
import { Link } from "react-router-dom";

const DealsOfDay = () => {

const { days, hours, minutes, seconds } =
useCountdown("2026-04-01");

return (

<section className="py-16 bg-gray-100">

<div className="max-w-7xl mx-auto px-4">

{/* TOP BANNERS */}
<div className="grid md:grid-cols-3 gap-6 mb-14">

{/* Left Banner */}
<div className="relative rounded-xl overflow-hidden">
<img
src="/images/banners/banner-left.png"
className="w-full h-[300px] object-cover"
/>
<div className="absolute inset-6 border border-white"></div>
</div>


{/* CENTER COUNTDOWN BANNER */}
<div className="bg-[#efe5d3] rounded-xl p-8 flex flex-col justify-center items-center text-center relative">

<h3 className="text-2xl font-bold mb-2">
Summer Discount
</h3>

<p className="text-gray-600">
Get 50% Off - Limited Time Offer
</p>

{/* COUNTDOWN */}
<div className="flex gap-6 mt-6 text-center">

<div>
<p className="text-2xl font-bold">{days}</p>
<span className="text-sm text-gray-500">Days</span>
</div>

<div>
<p className="text-2xl font-bold">{hours}</p>
<span className="text-sm text-gray-500">Hours</span>
</div>

<div>
<p className="text-2xl font-bold">{minutes}</p>
<span className="text-sm text-gray-500">Minutes</span>
</div>

<div>
<p className="text-2xl font-bold">{seconds}</p>
<span className="text-sm text-gray-500">Seconds</span>
</div>

</div>

<Link
to="/shop"
className="mt-6 bg-green-700 text-white px-6 py-3 rounded-full font-semibold"
>
Shop Now
</Link>

</div>


{/* Right Banner */}
<div className="relative rounded-xl overflow-hidden">
<img
src="/images/banners/banner-right.png"
className="w-full h-[300px] object-cover"
/>
<div className="absolute inset-6 border border-white"></div>
</div>

</div>


{/* DEALS HEADER */}
<div className="flex justify-between items-end mb-8">

<div>
<p className="text-gray-500">Today Deals</p>

<h2 className="text-3xl font-bold">
Deals Of <span className="text-red-500">the Day</span>
</h2>
</div>

<p className="text-gray-500 text-sm max-w-md">
Set of the under for the error the inside for the gold price
frees for the goods for the shop for the goods to the food
</p>

</div>


{/* PRODUCT DEALS */}
<div className="grid md:grid-cols-2 gap-6">

{/* PRODUCT 1 */}
<div className="bg-white rounded-xl shadow flex overflow-hidden">

<div className="bg-purple-200 p-6 flex items-center">
<img
src="/images/banners/fab-liquid.png"
className="w-40 object-contain"
/>
</div>

<div className="p-6 flex flex-col justify-between">

<div>

<span className="bg-gray-800 text-white text-xs px-2 py-1 rounded">
25% OFF
</span>

<p className="text-sm text-gray-500 mt-2">
Laundry supplies
</p>

<h3 className="text-lg font-bold">
Goorej fab liquid
</h3>

<p className="mt-2 text-xl font-bold">
₹400
<span className="text-gray-400 line-through text-sm ml-2">
₹500
</span>
</p>

<p className="text-sm text-yellow-500 mt-2">
⭐⭐⭐⭐☆ 4.5
</p>

</div>

<button className="bg-green-700 text-white px-5 py-2 rounded-full mt-4 w-fit">
ADD
</button>

</div>

</div>


{/* PRODUCT 2 */}
<div className="bg-white rounded-xl shadow flex overflow-hidden">

<div className="bg-purple-200 p-6 flex items-center">
<img
src="/images/products/handwash.png"
className="w-40 object-contain"
/>
</div>

<div className="p-6 flex flex-col justify-between">

<div>

<span className="bg-gray-800 text-white text-xs px-2 py-1 rounded">
25% OFF
</span>

<p className="text-sm text-gray-500 mt-2">
Personal care
</p>

<h3 className="text-lg font-bold">
Aloe Neem Hand wash
</h3>

<p className="mt-2 text-xl font-bold">
₹300
<span className="text-gray-400 line-through text-sm ml-2">
₹400
</span>
</p>

<p className="text-sm text-yellow-500 mt-2">
⭐⭐⭐⭐☆ 4.5
</p>

</div>

<button className="bg-green-700 text-white px-5 py-2 rounded-full mt-4 w-fit">
ADD
</button>

</div>

</div>

</div>

</div>

</section>

);

};

export default DealsOfDay;