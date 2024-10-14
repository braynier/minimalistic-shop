import Image from "next/image";

function Cta() {
  return (
    <section className="mb-16">
      <div className="mx-auto max-w-7xl">
        <div className="flex h-[640px]">
          <div className="relative order-2 h-full w-full flex-1">
            <Image
              className="object-cover"
              src="/cta/cta2.jpg"
              fill
              alt="Autumn collection of clothes"
            />
          </div>
          <div className="order-1 flex flex-1 flex-col items-center justify-center gap-y-3 bg-[#e9e9e9] px-20">
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
              first purchase! Don’t miss this chance to elevate your wardrobe
              with quality fashion that lasts.
            </p>
            <button className="self-baseline border-2 border-primary bg-primary px-3 py-2 text-lg uppercase text-secondary transition duration-300 hover:bg-[#e9e9e9] hover:text-primary">
              Shop now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Cta;
