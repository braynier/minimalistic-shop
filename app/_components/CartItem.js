"use client";

import Link from "next/link";
import { IoMdAdd, IoMdClose, IoMdRemove } from "react-icons/io";
import { useCart } from "../_contexts/CartContext";

function CartItem({ item }) {
  const { id, image, title, price, amount } = item;
  const { removeFromCart, increaseAmount, decreaseAmount } = useCart();

  const totalPrice = parseFloat(price * amount).toFixed(2);

  return (
    <div className="flex w-full gap-x-4 border-b border-gray-200 py-0 font-light text-gray-500 lg:px-6">
      <div className="flex min-h-[150px] w-full items-center gap-x-4">
        <Link href="/">
          <img className="max-w-[80px]" src={image} alt={title} />
        </Link>
        <div className="flex w-full flex-col">
          <div className="mb-2 flex justify-between">
            <Link
              href="/"
              className="max-w-[240px] cursor-pointer text-sm font-medium uppercase text-primary hover:underline"
            >
              {title}
            </Link>
            <div
              className="cursor-pointer text-xl"
              onClick={() => removeFromCart(id)}
            >
              <IoMdClose className="text-gray-500 transition hover:text-red-500" />
            </div>
          </div>
          <div className="flex h-[36px] gap-x-2 text-sm">
            <div className="flex h-full max-w-[100px] flex-1 items-center border font-medium text-primary">
              <div
                className="flex flex-1 cursor-pointer items-center justify-center"
                onClick={() => decreaseAmount(id)}
              >
                <IoMdRemove />
              </div>
              <div className="flex h-full items-center justify-center px-2">
                {amount}
              </div>
              <div
                className="flex h-full flex-1 cursor-pointer items-center justify-center"
                onClick={() => increaseAmount(id)}
              >
                <IoMdAdd />
              </div>
            </div>

            <div className="flex flex-1 items-center justify-around">
              ${price}
            </div>
            <div className="flex flex-1 items-center justify-end font-medium text-primary">
              ${totalPrice}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
