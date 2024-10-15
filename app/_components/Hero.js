import Image from "next/image";

import image1 from "../../public/hero/pict1.jpg";
import image2 from "../../public/hero/pict2.jpg";
import image3 from "../../public/hero/pict3.jpg";

function Hero() {
  return (
    <section className="mb-16 mt-20" id="home">
      <div className="mx-auto flex h-[60vh] max-w-7xl gap-x-1 px-5 md:h-[50vh] md:px-0">
        <div className="relative hidden h-full flex-1 md:block">
          <Image
            src={image1}
            fill
            objectFit="cover"
            placeholder="blur"
            alt="Picture of a young woman with a scarf"
          />
        </div>
        <div className="relative h-full flex-1">
          <Image
            src={image2}
            fill
            objectFit="cover"
            priority={true}
            placeholder="blur"
            alt="Picture of a woman wearing a yellowish sweater"
          />
          <div className="absolute left-0 top-1/2 flex -translate-y-1/2 transform flex-col">
            <h1 className="mb-5 w-fit bg-[#F0CD90] px-3 font-bebas text-[36px] font-semibold uppercase tracking-wider md:text-[40px]">
              <span>Fall</span>
            </h1>
            <h1 className="mb-5 w-fit bg-[#F0CD90] px-3 font-bebas text-[36px] font-semibold uppercase tracking-wider md:text-[40px]">
              <span>Into</span>
            </h1>
            <h1 className="mb-10 w-fit bg-[#F0CD90] px-10 font-bebas text-[52px] font-semibold uppercase tracking-wider md:-ml-11 md:text-[72px]">
              <span>Fashion</span>
            </h1>
            <h1 className="font-hero w-fit text-nowrap bg-[#F0CD90] px-10 font-bebas text-[52px] font-semibold uppercase tracking-wider md:-ml-11 md:text-[72px]">
              <span>Autumn 24</span>
            </h1>
          </div>
        </div>
        <div className="relative hidden h-full flex-1 md:block">
          <Image
            src={image3}
            fill
            objectFit="cover"
            placeholder="blur"
            alt="Picture of a man wearing yellowish autumn coat"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
