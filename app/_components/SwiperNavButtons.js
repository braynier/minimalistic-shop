import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import { useSwiper } from "swiper/react";

function SwiperNavButtons() {
  const swiper = useSwiper();
  return (
    <div className="flex items-center justify-between">
      <button
        className="flex h-8 w-8 items-center justify-center border border-[#e4e4e4] transition duration-300 hover:bg-[#e4e4e4]"
        onClick={() => swiper.slidePrev()}
      >
        <div>
          <GrFormPrevious className="text-2xl" />
        </div>
      </button>
      <button
        className="flex h-8 w-8 items-center justify-center border border-[#e4e4e4] transition duration-300 hover:bg-[#e4e4e4]"
        onClick={() => swiper.slideNext()}
      >
        <GrFormNext className="text-2xl" />
      </button>
    </div>
  );
}

export default SwiperNavButtons;
