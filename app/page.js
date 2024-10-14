import Cta from "./_components/Cta";
import Cta2 from "./_components/Cta2";
import Hero from "./_components/Hero";
import ProductsFeatured from "./_components/ProductsFeatured";
import ProductsProud from "./_components/ProductsProud";
import Sidebar from "./_components/Sidebar";
import { getProducts } from "./_lib/data";

export default async function Page() {
  const products = await getProducts();
  const featuredProducts = products.slice(0, 6); // Example: First 4 products
  const proudProducts = products.slice(6, 11); // Example: Next 4 products

  return (
    <div>
      <Hero />
      <ProductsFeatured products={featuredProducts} />
      <Sidebar />
      <Cta />
      <ProductsProud products={proudProducts} />
      <Cta2 />
    </div>
  );
}
