import { FC } from "react";
import styles from "./category-list.module.scss";

const data = [
  {
    name: "ÁO THUN",
    url: "https://n7media.coolmate.me/uploads/August2025/image-ao-thun-1_18_1.jpg?aio=w-672",
  },
  {
    name: "ÁO THUN",
    url: "https://n7media.coolmate.me/uploads/August2025/image-ao-thun-1_18_1.jpg?aio=w-672",
  },
  {
    name: "ÁO THUN",
    url: "https://n7media.coolmate.me/uploads/August2025/image-ao-thun-1_18_1.jpg?aio=w-672",
  },
  {
    name: "ÁO THUN",
    url: "https://n7media.coolmate.me/uploads/August2025/image-ao-thun-1_18_1.jpg?aio=w-672",
  },
  {
    name: "ÁO THUN",
    url: "https://n7media.coolmate.me/uploads/August2025/image-ao-thun-1_18_1.jpg?aio=w-672",
  },
  {
    name: "ÁO THUN",
    url: "https://n7media.coolmate.me/uploads/August2025/image-ao-thun-1_18_1.jpg?aio=w-672",
  },
  {
    name: "ÁO THUN",
    url: "https://n7media.coolmate.me/uploads/August2025/image-ao-thun-1_18_1.jpg?aio=w-672",
  },
  {
    name: "ÁO THUN",
    url: "https://n7media.coolmate.me/uploads/August2025/image-ao-thun-1_18_1.jpg?aio=w-672",
  },
];

const CategoryList: FC = () => {
  return (
    <div className={`${styles["category-list"]}`}>
      <nav className={styles["category-list__wrap-button"]}>
        <button>Nam</button>
        <button>Nữ</button>
      </nav>
      <div className={styles["category-list__wrap-link"]}>
        <div className={styles["category-list__wrap-link"]}>
          {data.map((item, id) => (
            <a href="" key={id} className={styles["item"]}>
              <img src={item.url} alt={item.name} />
              <p>{item.name}</p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryList;
