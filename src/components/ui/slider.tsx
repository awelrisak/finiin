"use client";

import SlickSlider from "react-slick";
import Image from "next/image";
import { useMediaQuery } from "react-responsive";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface SliderProps {
  slides: string[];
}

const SliderOne = ({ slides }: SliderProps) => {
  const isMediumScreen = useMediaQuery({ minWidth: 768, maxWidth: 1023 });
  const isSmallScreen = useMediaQuery({ maxWidth: 767 });

  const settings = {
    arrows: false,
    infinite: true,
    slidesToShow: 3,
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 1000,
    className: "w-full mx-auto cursor-pointer center-mode",
  };

  if (isMediumScreen) {
    settings.slidesToShow = 1.67;
  } else if (isSmallScreen) {
    settings.slidesToShow = 1;
  }

  return (
    <div>
      <SlickSlider {...settings}>
        {slides.map((slide, index) => (
          <div className="rounded-md px-2 md:p-10" key={index}>
            <Image
              priority
              src={slide}
              alt="logo"
              width={500}
              height={500}
              className="rounded-2xl"
            />
          </div>
        ))}
      </SlickSlider>
    </div>
  );
};

export default SliderOne;
