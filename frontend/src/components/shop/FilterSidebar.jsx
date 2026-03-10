function FilterSidebar() {
  return (
    <div className="w-64 border-r pr-6">

      <h3 className="font-bold mb-3">Category</h3>

      <div className="space-y-2 text-sm">
        <label className="block"><input type="checkbox"/> Vegetables</label>
        <label className="block"><input type="checkbox"/> Fruits</label>
        <label className="block"><input type="checkbox"/> Bakery</label>
        <label className="block"><input type="checkbox"/> Milk & Eggs</label>
      </div>

      <h3 className="font-bold mt-6 mb-3">Price</h3>

      <div className="space-y-2 text-sm">
        <label><input type="checkbox"/> ₹199 - ₹599</label>
        <label><input type="checkbox"/> ₹699 - ₹899</label>
      </div>

      <button className="bg-green-700 text-white w-full mt-6 py-2 rounded">
        Submit
      </button>

    </div>
  );
}

export default FilterSidebar;