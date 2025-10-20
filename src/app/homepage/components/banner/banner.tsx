"use client";

import React, { useEffect } from "react";
import styles from "./banner.module.scss";

import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/app/store";
import { getActiveBannerRequest } from "@/app/store/banners/banner.action";
import { CONFIG } from "@/app/config/env";
import { ADMIN_FILES } from "@/app/api/endpoint";

const Banner: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { banners } = useSelector((state: RootState) => state.banners);

  const bannerList = banners?.data;

  useEffect(() => {
    dispatch(getActiveBannerRequest());
  }, []);

  useEffect(() => {
    if (banners) {
      console.log(banners.data[0]._id);
    }
  }, [banners]);

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
            {bannerList?.map((banner) => (
              <SwiperSlide key={banner.imageId}>
                <a href="">
                  <img
                    src={`${CONFIG.BASE_URL + CONFIG.BASE_URL_VERSION + ADMIN_FILES + banner.imageId}`}
                    alt={banner.description}
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
