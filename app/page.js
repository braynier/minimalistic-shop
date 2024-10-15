import { Suspense } from "react";
import Cta from "./_components/Cta";
import Cta2 from "./_components/Cta2";
import Hero from "./_components/Hero";
import ProductsFeatured from "./_components/ProductsFeatured";
import ProductsProud from "./_components/ProductsProud";
import Sidebar from "./_components/Sidebar";
import Spinner from "./_components/Spinner";

function Page() {
  return (
    <div>
      <Hero />
      <Suspense fallback={<Spinner />}>
        <ProductsFeatured />
      </Suspense>
      <Sidebar />
      <Cta />
      <ProductsProud />
      <Cta2 />
    </div>
  );
}

export default Page;
