import { useEffect, useState } from "react";
import { getTestimonials } from "../services/testimonialService";

function TestimonialSection() {

  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    fetchTestimonials();
  }, []);

  const fetchTestimonials = async () => {
    const data = await getTestimonials();
    setTestimonials(data);
  };

  return (
    <div className="text-center py-16">

      <h2 className="text-3xl font-bold mb-8">
        Testimonial from
        <span className="text-green-600"> Our loyal customer</span>
      </h2>

      {testimonials.map((t) => (
        <div key={t.id} className="max-w-xl mx-auto">

          <img
            src={t.image}
            className="w-16 h-16 rounded-full mx-auto mb-4"
          />

          <p className="text-gray-600 mb-4">
            {t.message}
          </p>

          <h3 className="font-semibold">{t.name}</h3>
          <p className="text-sm text-gray-500">{t.role}</p>

        </div>
      ))}

    </div>
  );
}

export default TestimonialSection;