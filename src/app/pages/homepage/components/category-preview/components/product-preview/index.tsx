import { FC } from "react";
import styles from "./product-preview.module.scss";

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
        {data.map((data, id) => (
          <div key={id} className={styles["item"]}>
            <a href="">
              <img src={data.url} alt="" />
            </a>
            <div className={styles["wrap-color"]}>
              <button type="button"></button>
              <button></button>
            </div>
            <p>Áo Polo nam Premium Aircool</p>
            <div className={styles["price"]}>
              <b>399.000đ</b>
              <p className={styles["discount-price"]}>379.000đ</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductPreview;
