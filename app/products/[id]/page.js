import ProductDetails from "@/app/_components/ProductDetails";
import Sidebar from "@/app/_components/Sidebar";
import Spinner from "@/app/_components/Spinner";
import { getSingleProduct } from "@/app/_lib/data";
import { Suspense } from "react";

export async function generateMetadata({ params }) {
  const product = await getSingleProduct(params.id);
  return {
    title: `${product.title}`,
  };
}

export default async function Page({ params }) {
  const product = await getSingleProduct(params.id);

  return (
    <>
      <ProductDetails product={product} />
      <Sidebar />
    </>
  );
}
