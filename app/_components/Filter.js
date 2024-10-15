"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

function Filter() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const path = usePathname();

  const activeFilter = searchParams.get("category") ?? "all";

  function handleFilter(filter) {
    const params = new URLSearchParams(searchParams);
    params.set("category", filter);
    router.replace(`${path}?${params.toString()}`, { scroll: false });
  }

  return (
    <div className="flex border border-[#e5e7eb]">
      <Button
        filter="all"
        handleFilter={handleFilter}
        activeFilter={activeFilter}
      >
        All
      </Button>
      <Button
        filter="jewelery"
        handleFilter={handleFilter}
        activeFilter={activeFilter}
      >
        Jewelery
      </Button>
      <Button
        filter="men's clothing"
        handleFilter={handleFilter}
        activeFilter={activeFilter}
      >
        Men
      </Button>
      <Button
        filter="women's clothing"
        handleFilter={handleFilter}
        activeFilter={activeFilter}
      >
        Women
      </Button>
    </div>
  );
}

function Button({ filter, handleFilter, activeFilter, children }) {
  return (
    <button
      className={`px-5 py-2 text-primary hover:bg-gray-200 ${filter === activeFilter ? "bg-gray-200" : ""}`}
      onClick={() => handleFilter(filter)}
    >
      {children}
    </button>
  );
}

export default Filter;
