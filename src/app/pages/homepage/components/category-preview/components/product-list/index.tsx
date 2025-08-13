"use client";
import { FC } from "react";
import styles from "./product-list.module.scss";
import SmallText from "@/app/components/common/small-text";
import ProductReview from "@/app/components/common/product-review";
import { Swiper, SwiperSlide } from "swiper/react";

const data = [
  {
    url: "https://n7media.coolmate.me/uploads/June2025/t-shirt-chay-bo-airush-gradient-cut-_2-trang.jpg?aio=w-585",
  },
  {
    url: "https://n7media.coolmate.me/uploads/June2025/t-shirt-chay-bo-airush-gradient-cut-_2-trang.jpg?aio=w-585",
  },
  {
    url: "https://n7media.coolmate.me/uploads/June2025/t-shirt-chay-bo-airush-gradient-cut-_2-trang.jpg?aio=w-585",
  },
  {
    url: "https://n7media.coolmate.me/uploads/June2025/t-shirt-chay-bo-airush-gradient-cut-_2-trang.jpg?aio=w-585",
  },
  {
    url: "https://n7media.coolmate.me/uploads/June2025/t-shirt-chay-bo-airush-gradient-cut-_2-trang.jpg?aio=w-585",
  },
  {
    url: "https://n7media.coolmate.me/uploads/June2025/t-shirt-chay-bo-airush-gradient-cut-_2-trang.jpg?aio=w-585",
  },
  {
    url: "https://n7media.coolmate.me/uploads/June2025/t-shirt-chay-bo-airush-gradient-cut-_2-trang.jpg?aio=w-585",
  },
];

const ProductPreview: FC = () => {
  return (
    <div className={`${styles["product-preview"]} content`}>
      <div className={styles["wrap-item"]}>
        <Swiper slidesPerView={6} spaceBetween={10}>
          {data.map((data, id) => (
            <SwiperSlide key={id}>
              <div className={styles["item"]}>
                <SmallText text="NEW" className={styles["item--small--text"]} />
                <ProductReview
                  url={data.url}
                  name="Áo ba lỗ nam mặc trong thoáng khí nhanh khô Excool"
                  price="399.000đ"
                  discount="16%"
                  priceDiscount="379.000đ"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ProductPreview;
