"use client";

import Image from "next/image";
import Link from "next/link";
import { BsPlus, BsEyeFill } from "react-icons/bs";
import { useCart } from "../_contexts/CartContext";

function ProductCard({ product }) {
  const { image, category, title, price, id } = product;
  const { addToCart } = useCart();

  return (
    <div>
      <div className="transition: group relative mb-4 h-[300px] overflow-hidden border border-[#e4e4e4]">
        <div className="flex h-full w-full items-center justify-center">
          <div className="relative mx-auto flex h-[160px] w-[200px] items-center justify-center">
            <Image
              className="object-contain transition duration-300 group-hover:scale-110"
              fill
              src={image}
              alt={title}
            />
          </div>
        </div>
        <div className="absolute -right-11 top-6 flex flex-col items-center justify-center gap-y-2 p-2 opacity-0 transition-all duration-300 group-hover:right-5 group-hover:opacity-100">
          <button onClick={() => addToCart(product, id)}>
            <div className="flex h-12 w-12 items-center justify-center bg-red-500 text-white">
              <BsPlus className="text-3xl" />
            </div>
          </button>
          <Link
            className="flex h-12 w-12 items-center justify-center bg-white text-primary drop-shadow-xl"
            href={`/products/${id}`}
          >
            <BsEyeFill />
          </Link>
        </div>
      </div>

      <div>
        <div>
          <div className="text-sm capitalize text-gray-500">{category}</div>
          <div>
            <h3 className="mb1 font-semibold">{title}</h3>
          </div>
          <div className="font-semibold">{price}</div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
