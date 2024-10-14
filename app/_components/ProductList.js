import { getProducts } from "../_lib/data";
import ProductCard from "./ProductCard";

async function ProductList() {
  const products = await getProducts();

  return (
    <div className="grid grid-cols-1 gap-[30px] md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5">
      {products.map((product) => (
        <ProductCard product={product} key={product.id} />
      ))}
    </div>
  );
}

export default ProductList;
