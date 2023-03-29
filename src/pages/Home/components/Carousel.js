import "./carousel.css";
import Carousel1 from "../../../images/carousel/carousel1.webp";

import { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-fade";
import "swiper/css/autoplay";
import "swiper/css";

const CarouselList = [
  {
    background: Carousel1,
  },
  {
    background: Carousel1,
  },
  {
    background: Carousel1,
  },
];

const Carousel = () => {
  return (
    <section className="w-screen h-[590px] max-[640px]:h-[422px]">
      <Swiper
        className="mySwiper h-full w-full"
        loop={true}
        pagination={{
          type: "bullets",
          clickable: true,
        }}
        autoplay={{
          delay: 7000,
          disableOnInteraction: false,
        }}
        onSwiper={(swiper) => swiper}
        modules={[Autoplay, Pagination]}
        effect="fade"
      >
        {CarouselList.map((carousel, index) => {
          return (
            <SwiperSlide key={index} className="">
              <section
                className="w-full h-full relative flex bg-no-repeat bg-center bg-cover max-[640px]:bg-[30%]"
                style={{ backgroundImage: `url(${carousel.background})` }}
              ></section>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Carousel;
