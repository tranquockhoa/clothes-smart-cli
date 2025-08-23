"use client";
import { FC } from "react";
import "./category-list.scss";
import { Swiper, SwiperSlide } from "swiper/react";

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
    <div className="category-list">
      <nav className="category-list__wrap-button">
        <button>Nam</button>
        <button>Nữ</button>
      </nav>
      <div className="category-list__wrap-link">
        <Swiper slidesPerView={6} spaceBetween={10}>
          {data.map((item, id) => (
            <SwiperSlide key={id}>
              <a href="" className="item">
                <img src={item.url} alt={item.name} />
                <p>{item.name}</p>
              </a>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default CategoryList;
