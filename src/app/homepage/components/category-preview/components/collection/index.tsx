import { FC } from "react";
import styles from "./collection.module.scss";

const Collection: FC = () => {
  return (
    <div className={styles["product-preview"]}>
      <div className={`${styles["product-preview__title"]} content`}>
        <h3>SẢN PHẨM CHẠY BỘ</h3>
        <a href="">Xem thêm</a>
      </div>
    </div>
  );
};

export default Collection;
