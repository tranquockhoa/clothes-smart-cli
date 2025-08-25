import { FC, useState } from "react";
import styles from "./product-review.module.scss";
import QuickAddToCart from "../quick-add-to-cart";

interface ProductPreviewProps {
  url: string;
  urlOnHover: string;
  name: string;
  price: string;
  discount: string;
  priceDiscount: string;
}

const ProductReview: FC<ProductPreviewProps> = (props) => {
  const [isHover, setIsHover] = useState(false);
  const [url, setUrl] = useState(props.url);
  console.log(url);
  return (
    <div className={styles["product-review"]}>
      <a href="">
        <div
          className={styles["product-review__wrap-image"]}
          onMouseLeave={() => {
            setIsHover(false);
            setUrl(props.url);
          }}
          onMouseOver={() => {
            setIsHover(true);
            setUrl(props.urlOnHover);
          }}
        >
          {isHover && <QuickAddToCart />}
          <img src={url} alt="" />
        </div>
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
