"use client";

import Link from "next/link";
import { useState } from "react";
import { IoBagOutline, IoMenuOutline, IoClose } from "react-icons/io5";
import { useCart } from "../_contexts/CartContext";

function Navigation() {
  const { isOpen, setIsOpen, cartAmount } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  function toggleMobileMenu() {
    setMobileMenuOpen(!mobileMenuOpen);
  }

  return (
    <nav>
      <ul className="hidden items-center gap-x-5 md:flex">
        <li className="text-base font-semibold uppercase">
          <Link href="/products">Products</Link>
        </li>
        <li className="text-base font-semibold uppercase">
          <Link href="/">Product Page</Link>
        </li>
        <li
          className="relative flex cursor-pointer text-[30px]"
          onClick={() => setIsOpen(!isOpen)}
        >
          <IoBagOutline />
          <div className="absolute -right-2 flex h-[18px] w-[18px] items-center justify-center rounded-full bg-red-500 text-[12px] text-white">
            {cartAmount}
          </div>
        </li>
      </ul>
      <div className="md:hidden">
        <button onClick={toggleMobileMenu}>
          {mobileMenuOpen ? (
            <IoClose className="text-3xl" />
          ) : (
            <IoMenuOutline className="text-3xl" />
          )}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="fixed left-0 top-0 z-30 flex h-screen w-full bg-white p-10">
          <div className="">
            <button onClick={toggleMobileMenu}>
              <IoClose className="text-3xl" />
            </button>
          </div>
          <ul className="mx-auto flex h-full flex-col items-center justify-center gap-y-5">
            <li className="text-3xl font-semibold uppercase">
              <Link href="/products" onClick={toggleMobileMenu}>
                Products
              </Link>
            </li>
            <li className="text-3xl font-semibold uppercase">
              <Link href="/" onClick={toggleMobileMenu}>
                Product Page
              </Link>
            </li>
            <li
              className="relative flex cursor-pointer text-[50px]"
              onClick={() => setIsOpen(!isOpen)}
            >
              <IoBagOutline />
              <div className="absolute -right-2 flex h-[18px] w-[18px] items-center justify-center rounded-full bg-red-500 text-[12px] text-white">
                {cartAmount}
              </div>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navigation;
