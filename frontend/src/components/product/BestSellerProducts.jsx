import { useEffect, useState } from "react";
import { getBestSellerProducts } from "../../services/api";
import ProductCard from "./ProductCard";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

const BestSellerProducts = () => {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    getBestSellerProducts().then((data) => setProducts(data));
  }, []);

  return (
    <section className="py-12">

      <div className="max-w-7xl mx-auto px-4">

        <p className="text-sm text-gray-500">Best Seller</p>

        <h2 className="text-3xl font-bold mb-8">
          Best Seller Products
        </h2>

        <Swiper
          modules={[Navigation]}
          navigation
          spaceBetween={20}
          slidesPerView={5}
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
            1280: { slidesPerView: 5 }
          }}
        >

          {products.map(product => (
            <SwiperSlide key={product.id}>
              <ProductCard product={product} />
            </SwiperSlide>
          ))}

        </Swiper>

      </div>

    </section>
  );
};

export default BestSellerProducts;