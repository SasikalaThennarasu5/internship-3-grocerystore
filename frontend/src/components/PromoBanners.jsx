const banners = [
  {
    title: "Fresh Fruits, Pure quality",
    desc: "Fresh fruits for the fresh on the healthy of delivery and ingreted",
    img: "/images/banners/fruits.png",
    bg: "bg-yellow-400",
  },
  {
    title: "Fresh milk & eggs Pure quality",
    desc: "Fresh fruits for the fresh on the healthy of delivery and ingreted",
    img: "/images/banners/milk.png",
    bg: "bg-pink-200",
  },
  {
    title: "Purely fresh vegetables",
    desc: "Vegetables for the fresh on the healthy of delivery and ingreted",
    img: "/images/banners/vegetables.png",
    bg: "bg-orange-200",
  },
];

const PromoBanners = () => {
  return (
    <section className="py-10">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-6">

        {banners.map((banner, index) => (
          <div
            key={index}
            className={`${banner.bg} rounded-xl p-6 flex items-center justify-between`}
          >
            <div className="max-w-[60%]">

              <span className="text-xs bg-yellow-200 px-3 py-1 rounded-full">
                Flat 25% Discount
              </span>

              <h3 className="text-lg font-bold mt-3">
                {banner.title}
              </h3>

              <p className="text-sm text-gray-600 mt-2">
                {banner.desc}
              </p>

              <button className="mt-4 bg-green-600 text-white px-5 py-2 rounded-full text-sm">
                Shop Now
              </button>

            </div>

            <img
              src={banner.img}
              alt=""
              className="w-28 object-contain"
            />

          </div>
        ))}

      </div>
    </section>
  );
};

export default PromoBanners;