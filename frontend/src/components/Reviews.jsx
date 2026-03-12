import { useEffect, useState } from "react";
import api from "../api/axios";

function Reviews({productId}){

const [reviews,setReviews] = useState([]);
const [form,setForm] = useState({
rating:5,
comment:""
});

useEffect(()=>{

api.get(`reviews/${productId}/`)
.then(res=>setReviews(res.data));

},[productId]);

const submitReview = async(e)=>{

e.preventDefault();

await api.post("reviews/add/",{
product:productId,
rating:form.rating,
comment:form.comment
});

alert("Review added");

};

return(

<div>

<h3 className="text-xl font-semibold mb-4">
Reviews
</h3>

{/* LIST */}

{reviews.map(r=>(
<div
key={r.id}
className="border-b py-4"
>

<p className="font-semibold">
{r.user_name}
</p>

<p className="text-yellow-500">
{"★".repeat(r.rating)}
</p>

<p>{r.comment}</p>

</div>
))}

{/* ADD REVIEW */}

<form
onSubmit={submitReview}
className="mt-8 space-y-3"
>

<h4 className="font-semibold">
Add your review
</h4>

<select
onChange={(e)=>setForm({...form,rating:e.target.value})}
className="border p-2"
>

<option value="5">5</option>
<option value="4">4</option>
<option value="3">3</option>

</select>

<textarea
placeholder="Write review"
onChange={(e)=>setForm({...form,comment:e.target.value})}
className="border w-full p-2"
/>

<button
className="bg-green-600 text-white px-5 py-2 rounded"
>
Submit
</button>

</form>

</div>

);

}

export default Reviews;