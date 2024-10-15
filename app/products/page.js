import ProductList from "../_components/ProductList";
import Sidebar from "../_components/Sidebar";

export const metadata = {
  title: "Products",
};

function Page() {
  return (
    <div className="mx-auto mt-36 max-w-7xl px-5">
      <ProductList />
      <Sidebar />
    </div>
  );
}

export default Page;
