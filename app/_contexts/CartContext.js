"use client";

import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();

function CartProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [cart, setCart] = useState([]);
  const [cartAmount, setCartAmount] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);

  useEffect(
    function () {
      const total = cart.reduce((acc, curr) => {
        return acc + curr.price * curr.amount;
      }, 0);
      setCartTotal(total);
    },
    [cart],
  );

  useEffect(
    function () {
      if (cart) {
        const amount = cart.reduce((acc, cur) => {
          return acc + cur.amount;
        }, 0);
        setCartAmount(amount);
      }
    },
    [cart],
  );

  function addToCart(product, id) {
    const newItem = { ...product, amount: 1 };
    const cartItem = cart.find((item) => {
      return item.id === id;
    });

    if (cartItem) {
      const newCart = [...cart].map((item) => {
        if (item.id === id) {
          return { ...item, amount: cartItem.amount + 1 };
        } else {
          return item;
        }
      });
      setCart(newCart);
    } else {
      setCart([...cart, newItem]);
    }
  }

  function removeFromCart(id) {
    const newCart = cart.filter((item) => {
      return item.id !== id;
    });
    setCart(newCart);
  }

  function increaseAmount(id) {
    const cartItem = cart.find((item) => item.id === id);
    addToCart(cartItem, id);
  }

  function decreaseAmount(id) {
    const cartItem = cart.find((item) => item.id === id);
    if (cartItem) {
      const newCart = cart.map((item) => {
        if (item.id === id) {
          return { ...item, amount: cartItem.amount - 1 };
        } else {
          return item;
        }
      });
      setCart(newCart);
    }

    if (cartItem.amount < 2) {
      removeFromCart(id);
    }
  }

  function resetCart() {
    setCart([]);
  }

  return (
    <CartContext.Provider
      value={{
        isOpen,
        setIsOpen,
        cart,
        addToCart,
        removeFromCart,
        increaseAmount,
        decreaseAmount,
        resetCart,
        cartAmount,
        setCartAmount,
        cartTotal,
        setCartTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

function useCart() {
  const context = useContext(CartContext);

  if (context === undefined)
    throw new Error("useCart was used outside of CartContext.Provider");

  return context;
}

export { CartProvider, useCart };
