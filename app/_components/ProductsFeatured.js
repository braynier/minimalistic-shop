"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import ProductCard from "./ProductCard";
import SwiperNavButtons from "./SwiperNavButtons";

function ProductsFeatured({ products }) {
  return (
    <section className="mb-16 py-12" id="featured">
      <div className="mx-auto max-w-7xl">
        <div className="mb-3">
          <h3 className="font-bebas text-[30px] tracking-wide">
            Our new collections
          </h3>
        </div>

        <Swiper slidesPerView={5} spaceBetween={30}>
          <SwiperNavButtons />
          {products.map((product) => (
            <SwiperSlide key={product.id}>
              <ProductCard product={product} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default ProductsFeatured;
