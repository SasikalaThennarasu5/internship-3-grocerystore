function SortBar({ filters, setFilters }) {

return (

<div className="flex justify-between items-center mb-4">

<p>
Showing results
</p>

<select
className="border p-2 rounded"
onChange={(e)=>setFilters({
...filters,
ordering:e.target.value
})}
>

<option value="">
Default sorting
</option>

<option value="price">
Price low to high
</option>

<option value="-price">
Price high to low
</option>

<option value="-rating">
Top rated
</option>

</select>

</div>

)

}

export default SortBar