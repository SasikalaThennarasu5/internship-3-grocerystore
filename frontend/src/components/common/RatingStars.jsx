function RatingStars({ rating }) {

const stars = [1,2,3,4,5]

return (

<div className="flex items-center gap-1">

{stars.map((star)=>{

if(star <= rating){

return <span key={star} className="text-yellow-400">★</span>

}

return <span key={star} className="text-gray-300">★</span>

})}

<span className="text-sm text-gray-500 ml-1">
{rating}
</span>

</div>

)

}

export default RatingStars