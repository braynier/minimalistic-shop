"use client";

import Image from "next/image";
import { useCart } from "../_contexts/CartContext";
import ProductsTrending from "./ProductsTrending";

function ProductDetails({ product }) {
  const { image, title, price, description, id } = product;
  const { addToCart } = useCart();

  return (
    <section className="flex h-screen items-center sm:h-[70vh]">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-center lg:flex-row">
          <div className="mb-8 flex flex-1 items-center justify-center lg:mb-0">
            <div className="relative h-[200px] w-[200px] lg:h-[384px] lg:w-[384px]">
              <Image
                src={image}
                alt={title}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 200px, 384px"
              />
            </div>
          </div>
          <div className="flex-1 text-center lg:text-left">
            <h1 className="mx-auto mb-2 max-w-[450px] px-3 text-[40px] font-medium lg:mx-0 lg:px-0">
              {title}
            </h1>
            <p className="mb-6 text-xl font-medium text-red-500">{price}$</p>
            <p className="mb-8">{description}</p>
            <button
              className="border-2 border-primary bg-primary px-3 py-2 text-sm uppercase text-secondary transition duration-300 hover:bg-[#e9e9e9] hover:text-primary"
              onClick={() => addToCart(product, id)}
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductDetails;
