function FilterSidebar({ filters, setFilters, categories = [], brands = [] }) {

return (

<div className="bg-white p-4 rounded shadow">

<h3 className="font-semibold mb-4">
Filter Options
</h3>

{/* CATEGORY */}

<div className="mb-6">

<p className="font-semibold mb-2">
Category
</p>

{categories?.map(cat => (

<label
key={cat.id}
className="block text-sm"
>

<input
type="checkbox"
value={cat.id}
onChange={(e)=>{

setFilters({
...filters,
category:category.id(e.target.value)
})

}}
/>

<span className="ml-2">
{cat.name}
</span>

</label>

))}

</div>

{/* PRICE */}

<div className="mb-6">

<p className="font-semibold mb-2">
Price
</p>

<input
type="number"
placeholder="Min"
className="border p-1 w-full mb-2"
onChange={(e)=>setFilters({...filters,price_min:e.target.value})}
/>

<input
type="number"
placeholder="Max"
className="border p-1 w-full"
onChange={(e)=>setFilters({...filters,price_max:e.target.value})}
/>

</div>

{/* RATING */}

<div className="mb-6">

<p className="font-semibold mb-2">
Review
</p>

{[5,4,3,2,1].map(r=>(
<label key={r} className="block text-sm">

<input
type="checkbox"
onChange={()=>setFilters({...filters,rating:r})}
/>

<span className="ml-2">
{r} Star
</span>

</label>
))}

</div>

{/* STOCK */}

<div>

<label>

<input
type="checkbox"
onChange={(e)=>setFilters({
...filters,
in_stock:e.target.checked
})}
/>

<span className="ml-2">
In Stock
</span>

</label>

</div>

</div>

)

}

export default FilterSidebar