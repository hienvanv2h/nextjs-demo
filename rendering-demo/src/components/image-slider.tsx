"use client";

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import image1 from "../public/images/image1.jpg";
import image2 from "../public/images/image2.jpg";
import image3 from "../public/images/image3.jpg";
import image4 from "../public/images/image4.jpg";

export const ImageSlider = () => {
  const settings = {
    dots: true,
  };
  return (
    <div className="image-slider-container">
      <Slider {...settings}>
        <div>
          <Image src={image1} alt="Image 1" placeholder="blur" />
        </div>
        <div>
          <Image src={image2} alt="Image 2" placeholder="blur" />
        </div>
        <div>
          <Image src={image3} alt="Image 3" placeholder="blur" />
        </div>
        <div>
          <Image src={image4} alt="Image 4" placeholder="blur" />
        </div>
      </Slider>
    </div>
  );
};
