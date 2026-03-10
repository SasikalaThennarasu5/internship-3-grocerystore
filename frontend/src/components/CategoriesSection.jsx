import { useEffect, useState } from "react";
import { getCategories } from "../services/categoryService";

function CategoriesSection() {

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    const data = await getCategories();
    console.log(data);
    setCategories(data);
  };

  return (
    <section className="py-16 text-center">

      <p className="text-green-700 font-semibold text-lg">Categories</p>
      <h2 className="text-4xl font-bold mb-12">
        Featured <span className="text-green-700">Categories</span>
      </h2>

      <div className="flex justify-center gap-10 flex-wrap">

        {categories.map((cat) => (
          <div key={cat.id} className="flex flex-col items-center w-32">

            <div className="bg-green-200 w-28 h-28 rounded-full flex items-center justify-center">
              <img
                src={cat.image}
                alt={cat.name}
                className="w-16 h-16 object-contain"
              />
            </div>

            <h3 className="font-semibold mt-2">{cat.name}</h3>

            <p className="text-green-600 text-sm">
              {cat.product_count} products
            </p>

          </div>
        ))}

      </div>

    </section>
  );
}

export default CategoriesSection;