"use client";

import React from "react";
import styles from "./banner.module.scss";

import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface Slide {
  id: number;
  title: string;
  tagline: string;
  image: string;
  buttons: ButtonProps[];
}

interface ButtonProps {
  id: number;
  text: string;
  link: string;
  type: string;
}

interface DemoSliderProps {
  data: Slide[];
}

const Banner: React.FC<DemoSliderProps> = ({ data }) => {
  return (
    <section className={styles["banner"]}>
      <div className={styles["banner-wrapper"]}>
        <ul className={styles["banner-list"]}>
          <Swiper
            navigation
            pagination={{ type: "bullets", clickable: true }}
            autoplay={true}
            loop={true}
            modules={[Autoplay, Navigation, Pagination]}
          >
            {data.map(({ id }) => (
              <SwiperSlide key={id}>
                <a href="">
                  <img
                    src="https://n7media.coolmate.me/uploads/August2025/29DHero_Banner_-_1920_x_789_(1).jpg"
                    alt=""
                  />
                </a>
              </SwiperSlide>
            ))}
          </Swiper>
        </ul>
      </div>
    </section>
  );
};

export default Banner;
