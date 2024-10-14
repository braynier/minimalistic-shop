"use client";

import Image from "next/image";

function ProductDetails() {
  return (
    <section className="flex h-screen items-center">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-center lg:flex-row">
          <div className="mb-8 flex flex-1 items-center justify-center lg:mb-0">
            <img
              className="max-w-[200px] lg:max-w-sm"
              src="/products/bag.svg"
            />
          </div>
          <div className="flex-1 text-center lg:text-left">
            <h1 className="mx-auto mb-2 max-w-[450px] px-3 text-[40px] font-medium">
              Title
            </h1>
            <p className="mb-6 text-xl font-medium text-red-500">56$</p>
            <p className="mb-8">
              lorem vewve wvw vevweve ev ewv ewvv ev ewbbb wb wbwwbbwbwbwbw dw w
              wwww ww w w w w w w w w w w w w w w w w w w w w w w w
            </p>
            <button className="border-2 border-primary bg-primary px-3 py-2 text-sm uppercase text-secondary transition duration-300 hover:bg-[#e9e9e9] hover:text-primary">
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductDetails;
