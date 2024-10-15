import { getProducts } from "../_lib/data";
import ProductCard from "./ProductCard";

async function ProductList({ filter }) {
  const products = await getProducts();

  if (!products.length) return null;

  let displayedProducts;
  if (filter === "all") {
    displayedProducts = products;
  } else {
    displayedProducts = products.filter(
      (product) => product.category === filter,
    );
  }

  return (
    <div className="grid grid-cols-1 gap-[30px] md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5">
      {displayedProducts.map((product) => (
        <ProductCard product={product} key={product.id} />
      ))}
    </div>
  );
}

export default ProductList;
