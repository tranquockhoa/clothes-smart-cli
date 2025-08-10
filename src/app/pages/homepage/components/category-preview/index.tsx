import { FC } from "react";
import styles from "./category-preview.module.scss";
import ContentBanner from "./components/content-banner";
import Collection from "./components/collection";
import ProductPreview from "./components/product-preview";

const CategoryPreview: FC = () => {
  return (
    <div>
      <div className={styles["category-preview__banner"]}>
        <img
          src="https://n7media.coolmate.me/uploads/August2025/h1.jpg"
          alt=""
        />
        <ContentBanner title={""} description={""} />
      </div>
      <Collection />
      <ProductPreview />
    </div>
  );
};

export default CategoryPreview;
