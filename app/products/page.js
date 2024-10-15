import Filter from "../_components/Filter";
import ProductList from "../_components/ProductList";
import Sidebar from "../_components/Sidebar";

export const metadata = {
  title: "Products",
};

export default async function Page({ searchParams }) {
  const filter = searchParams?.category ?? "all";

  return (
    <div className="mx-auto mb-10 mt-36 max-w-7xl px-5">
      <div className="mb-8 flex justify-center sm:justify-end">
        <Filter />
      </div>
      <ProductList filter={filter} />
      <Sidebar />
    </div>
  );
}
