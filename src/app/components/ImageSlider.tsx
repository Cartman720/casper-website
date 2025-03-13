"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface SlideItem {
  imageSrc: string;
  alt: string;
  caption: string;
}

interface ImageSliderProps {
  slides: SlideItem[];
}

export default function ImageSlider({ slides }: ImageSliderProps) {
  return (
    <div className="rounded-xl overflow-hidden shadow-lg mb-8 p-6 ring-4 ring-[#FE2C55]">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        navigation={true}
        pagination={{
          clickable: true,
          dynamicBullets: false,
        }}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        loop={true}
        className="w-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-[350px] w-full">
              <Image
                src={slide.imageSrc}
                alt={slide.alt}
                fill
                className="object-contain"
                priority={index === 0}
              />
            </div>
            <div className="p-4 mb-6 text-center">
              <p className="font-bold text-[#FE2C55]">{slide.caption}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
