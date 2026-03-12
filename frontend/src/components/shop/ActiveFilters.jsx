function ActiveFilters({ filters, setFilters }) {

const removeFilter = (key)=>{

const updated = { ...filters }

delete updated[key]

setFilters(updated)

}

return (

<div className="flex gap-2 flex-wrap mb-4">

{filters.price_min && filters.price_max && (

<span className="bg-yellow-400 px-3 py-1 rounded-full text-sm flex items-center gap-2">

Price: ₹{filters.price_min} - ₹{filters.price_max}

<button onClick={()=>removeFilter("price_min")}>×</button>

</span>

)}

{filters.rating && (

<span className="bg-yellow-400 px-3 py-1 rounded-full text-sm flex items-center gap-2">

{filters.rating} star

<button onClick={()=>removeFilter("rating")}>×</button>

</span>

)}

{filters.in_stock && (

<span className="bg-yellow-400 px-3 py-1 rounded-full text-sm flex items-center gap-2">

In stock

<button onClick={()=>removeFilter("in_stock")}>×</button>

</span>

)}

</div>

)

}

export default ActiveFilters