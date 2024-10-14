"use client";

import { IoMdArrowForward } from "react-icons/io";
import CartItem from "./CartItem";
import { useCart } from "../_contexts/CartContext";

function Sidebar() {
  const { isOpen, setIsOpen } = useCart();

  return (
    <div
      className={`${isOpen ? "right-0" : "-right-full"} fixed top-0 z-20 h-full w-full bg-white px-4 shadow-2xl transition-all duration-300 md:w-[35vw] lg:px-[35px] xl:max-w-[30vw]`}
    >
      <div className="flex items-center justify-between border-b py-6">
        <div className="text-sm font-semibold uppercase">Shopping Bag (0)</div>
        <div
          className="flex h-8 w-8 cursor-pointer items-center justify-center"
          onClick={() => setIsOpen(!isOpen)}
        >
          <IoMdArrowForward className="text-2xl" />
        </div>
      </div>
      <div>
        <CartItem />
        <CartItem />
      </div>
    </div>
  );
}

export default Sidebar;
