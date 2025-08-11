import { FC } from "react";
import styles from "./product-review.module.scss";

interface ProductPreviewProps {
  url: string;
  name: string;
  price: string;
  discount: string;
  priceDiscount: string;
}

const ProductReview: FC<ProductPreviewProps> = (props) => {
  return (
    <div className={styles["product-review"]}>
      <a href="">
        <img src={props.url} alt="" />
      </a>

      <div className={styles["item__des"]}>
        <div className={styles["wrap-color"]}>
          <button type="button"></button>
          <button></button>
        </div>
        <p>{props.name}</p>
        <div className={styles["price"]}>
          <p className={styles["real-price"]}>{props.price}</p>
          <span>{props.discount}</span>
          <p className={styles["discount-price"]}>{props.priceDiscount}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductReview;
