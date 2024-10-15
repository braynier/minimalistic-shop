"use client";

import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import ProductCard from "./ProductCard";
import SwiperNavButtons from "./SwiperNavButtons";
import { getProducts } from "../_lib/data";
import Spinner from "./Spinner";

export default function ProductsFeatured() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const fetchedProducts = await getProducts();
        setProducts(fetchedProducts.slice(0, 6));
        setLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error);
        setLoading(false);
      }
    }

    fetchProducts();
  }, []);

  if (loading) {
    return (
      <div className="flex h-64 items-center justify-center">
        <Spinner />
      </div>
    );
  }

  return (
    <section className="mb-16 py-12" id="featured">
      <div className="mx-auto max-w-7xl px-5">
        <div className="mb-3">
          <h3 className="font-bebas text-[30px] tracking-wide">
            Our new collections
          </h3>
        </div>

        <Swiper
          spaceBetween={30}
          breakpoints={{
            650: {
              slidesPerView: 2,
            },
            1080: {
              slidesPerView: 4,
            },
          }}
        >
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
