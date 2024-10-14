import Image from "next/image";

function Cta() {
  return (
    <section className="mb-16">
      <div className="mx-auto max-w-7xl">
        <div className="flex h-[640px]">
          <div className="relative h-full w-full flex-1">
            <Image
              className="object-cover"
              src="/cta/cta2.jpg"
              fill
              alt="Autumn collection of clothes"
            />
          </div>
          <div className="flex flex-1 flex-col items-center justify-center gap-y-3 bg-[#e9e9e9] px-20">
            <h2 className="font-bebas text-[42px]">
              Autumn Collection – Embrace the Season with Confidence
            </h2>
            <p>
              As the crisp air of autumn sets in, our carefully curated
              collection ensures you stay warm, stylish, and confident. Crafted
              from the finest materials and designed with timeless elegance,
              each piece promises comfort and durability that lasts through the
              season and beyond.
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
