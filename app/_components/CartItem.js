"use client";

import Link from "next/link";
import { IoMdAdd, IoMdClose, IoMdRemove } from "react-icons/io";

function CartItem() {
  return (
    <div className="flex w-full gap-x-4 border-b border-gray-200 py-0 font-light text-gray-500 lg:px-6">
      <div className="flex min-h-[150px] w-full items-center gap-x-4">
        <Link href="/">
          <img className="max-w-[80px]" src="/products/product.jpg" alt="" />
        </Link>
        <div className="flex w-full flex-col">
          <div className="mb-2 flex justify-between">
            <Link
              href="/"
              className="max-w-[240px] cursor-pointer text-sm font-medium uppercase text-primary hover:underline"
            >
              title
            </Link>
            <div className="cursor-pointer text-xl">
              <Link href="/">
                <IoMdClose className="text-gray-500 transition hover:text-red-500" />
              </Link>
            </div>
          </div>
          <div className="flex h-[36px] gap-x-2 text-sm">
            <div className="flex h-full max-w-[100px] flex-1 items-center border font-medium text-primary">
              <div className="flex flex-1 cursor-pointer items-center justify-center">
                <IoMdRemove />
              </div>
              <div className="flex h-full items-center justify-center px-2">
                12
              </div>
              <div className="flex h-full flex-1 cursor-pointer items-center justify-center">
                <IoMdAdd />
              </div>
            </div>

            <div className="flex flex-1 items-center justify-around">8</div>
            <div className="flex flex-1 items-center justify-end font-medium text-primary">
              566$
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
