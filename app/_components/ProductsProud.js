import ProductCard from "./ProductCard";

function ProductsFeatured({ products }) {
  return (
    <section className="mb-16 py-12" id="featured">
      <div className="mx-auto max-w-7xl">
        <div className="mb-3">
          <h3 className="font-bebas text-[30px] tracking-wide">
            Limited Edition
          </h3>
        </div>
        <div className="grid grid-cols-1 gap-[30px] md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5">
          {products.map((product) => (
            <ProductCard product={product} key={product.id} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProductsFeatured;
