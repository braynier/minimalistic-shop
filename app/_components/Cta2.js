import Image from "next/image";
import Link from "next/link";

function Cta() {
  return (
    <section className="mb-16">
      <div className="mx-auto max-w-7xl px-5">
        <div className="flex h-[640px] flex-col md:flex-row">
          <div className="relative order-2 hidden h-full w-full flex-1 md:block">
            <Image
              className="object-cover"
              src="/cta/cta2.jpg"
              fill
              alt="Autumn collection of clothes"
            />
          </div>
          <div className="order-1 flex flex-1 flex-col items-center justify-center gap-y-3 bg-[#e9e9e9] px-5 md:px-20">
            <h1 className="font-bebas text-[42px]">
              Elevate Your Autumn Wardrobe
            </h1>
            <p>
              From cozy sweaters that keep you warm on chilly days to chic
              outerwear that adds a touch of sophistication, our collection has
              everything you need to look and feel your best this season.
            </p>
            <p>
              Enjoy a <span className="font-bold">20% discount</span> on your
              first purchase! Don&apos;t miss this chance to elevate your
              wardrobe with quality fashion that lasts.
            </p>
            <Link
              href="/products"
              className="self-baseline border-2 border-primary bg-primary px-3 py-2 text-lg uppercase text-secondary transition duration-300 hover:bg-[#e9e9e9] hover:text-primary"
            >
              Shop now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Cta;
