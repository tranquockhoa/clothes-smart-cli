import { FC } from "react";
import styles from "./product-list.module.scss";
import SmallText from "@/app/components/common/small-text";
import ProductReview from "@/app/components/common/product-review";

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
            <SmallText text="NEW" className={styles["item--small--text"]} />
            <ProductReview
              url={data.url}
              name="Áo ba lỗ nam mặc trong thoáng khí nhanh khô Excool"
              price="399.000đ"
              discount="16%"
              priceDiscount="379.000đ"
            />
            {/* <a href="">
              <img src={data.url} alt="" />
            </a>
            <div className={styles["item__des"]}>
              <div className={styles["wrap-color"]}>
                <button type="button"></button>
                <button></button>
              </div>
              <p>Áo ba lỗ nam mặc trong thoáng khí nhanh khô Excool</p>
              <div className={styles["price"]}>
                <p className={styles["real-price"]}>399.000đ</p>
                <span>16%</span>
                <p className={styles["discount-price"]}>379.000đ</p>
              </div>
            </div> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductPreview;
