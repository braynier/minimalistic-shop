"use client";

import { useEffect, useState } from "react";
import Logo from "./Logo";
import Navigation from "./Navigation";

function Header() {
  const [isHeaderActive, setIsHeaderActive] = useState(false);

  useEffect(function () {
    function handleScroll() {
      if (window.scrollY > 80) setIsHeaderActive(true);
      else setIsHeaderActive(false);
    }

    document.addEventListener("scroll", handleScroll);

    return function () {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`${isHeaderActive ? "bg-white py-4 shadow-lg" : ""} fixed left-0 top-0 z-20 w-full bg-white px-6 py-6 transition-all`}
    >
      <div className="mx-auto flex h-full max-w-7xl items-center justify-between">
        <Logo />
        <Navigation />
      </div>
    </header>
  );
}

export default Header;
