"use client";

import { IoMdArrowForward } from "react-icons/io";
import { FiTrash2 } from "react-icons/fi";
import CartItem from "./CartItem";
import { useCart } from "../_contexts/CartContext";
import Link from "next/link";

function Sidebar() {
  const { isOpen, setIsOpen, cart, resetCart, cartTotal, cartAmount } =
    useCart();
  const parsedTotal = parseFloat(cartTotal).toFixed(2);

  return (
    <div
      className={`${isOpen ? "right-0" : "-right-full"} fixed top-0 z-20 h-full w-full bg-white px-4 shadow-2xl transition-all duration-300 md:w-[35vw] lg:px-[35px] xl:max-w-[30vw]`}
    >
      <div className="flex items-center justify-between border-b py-6">
        <div className="text-sm font-semibold uppercase">
          Shopping Bag ({cartAmount})
        </div>
        <div
          className="flex h-8 w-8 cursor-pointer items-center justify-center"
          onClick={() => setIsOpen(!isOpen)}
        >
          <IoMdArrowForward className="text-2xl" />
        </div>
      </div>
      <div className="flex h-[420px] flex-col gap-y-2 overflow-y-auto overflow-x-hidden border-b lg:h-[640px]">
        {cart.map((item) => (
          <CartItem item={item} key={item.id} />
        ))}
      </div>
      <div className="mt-4 flex flex-col gap-y-3 py-4">
        <div className="flex w-full items-center justify-between">
          <div className="font-semibold uppercase">
            <span className="mr-2">Total:</span> {parsedTotal}$
          </div>
          <div
            className="flex h-12 w-12 cursor-pointer items-center justify-center bg-red-500 py-4 text-xl text-white"
            onClick={resetCart}
          >
            <FiTrash2 />
          </div>
        </div>
        <Link
          href="/"
          className="flex w-full items-center justify-center bg-gray-200 p-4 font-medium text-primary"
        >
          View Cart
        </Link>
        <Link
          href="/"
          className="flex w-full items-center justify-center bg-primary p-4 font-medium text-secondary"
        >
          Checkout
        </Link>
      </div>
    </div>
  );
}

export default Sidebar;
