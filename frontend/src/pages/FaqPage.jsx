import { useState } from "react";
import Newsletter from "../components/Newsletter";

function FaqPage() {

  const [open, setOpen] = useState(1);

  const faqData = [
    {
      question: "Are the products fresh and of high quality?",
      answer: "All our groceries are sourced daily from trusted farmers."
    },
    {
      question: "What are your delivery hours?",
      answer: "We deliver groceries from 8AM to 10PM every day."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept UPI, cards, wallets and cash on delivery."
    },
    {
      question: "Do you offer discounts or promotions?",
      answer: "Yes! Check our offers section for weekly deals."
    },
    {
      question: "How can I provide feedback about my experience?",
      answer: "You can contact support or leave a review."
    },
    {
      question: "Do you offer bulk ordering for events?",
      answer: "Yes, contact our support for bulk orders."
    }
  ];

  const categories = [
    "General Information",
    "Ordering and payment",
    "Delivery and pickup",
    "Products and Availability",
    "Account & Profile"
  ];

  return (
    <div>

      {/* HERO */}
      <div className="bg-yellow-200 py-12 text-center">
        <h1 className="text-3xl font-bold">FAQ’s</h1>
        <p className="text-gray-600 mt-2">Home / FAQs</p>
      </div>

      {/* FAQ SECTION */}

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 mt-12 px-6">

        {/* LEFT CATEGORY */}

        <div className="space-y-4">

          {categories.map((cat, index) => (

            <button
              key={index}
              className={`w-full text-left px-5 py-3 rounded-full border
              ${index === 0
                ? "bg-yellow-400 border-yellow-400"
                : "bg-white"
              }`}
            >
              {cat}
            </button>

          ))}

        </div>

        {/* FAQ ACCORDION */}

        <div className="md:col-span-2 space-y-4">

          {faqData.map((faq, index) => (

            <div
              key={index}
              className={`rounded-lg border p-4 cursor-pointer
              ${open === index ? "bg-green-700 text-white" : "bg-gray-100"}`}
              onClick={() => setOpen(index)}
            >

              <div className="flex justify-between items-center">

                <h3 className="font-medium">{faq.question}</h3>

                <span className="text-xl">
                  {open === index ? "-" : "+"}
                </span>

              </div>

              {open === index && (
                <p className="mt-2 text-sm">
                  {faq.answer}
                </p>
              )}

            </div>

          ))}

        </div>

      </div>

      {/* NEWSLETTER */}

      <Newsletter />

    </div>
  );
}

export default FaqPage;