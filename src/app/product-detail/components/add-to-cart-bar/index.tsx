import { FC } from "react";
// import StarRateIcon from "@mui/icons-material/StarRate";
import "./add-to-cart-bar.scss";
import ButtonColor from "@/app/components/common/button-color";
import MyButton from "@/app/components/ui/button";

const AddToCartBar: FC = () => {
  return (
    <div className="product-cart">
      <div className="product-cart__image">
        <img
          src="https://n7media.coolmate.me/uploads/May2025/t-shirt-the-thao-nam-flexline-active-Den_1.jpg"
          alt="Quần Thể Thao"
        />
      </div>

      <div className="product-cart__info">
        <h3 className="product-cart__info-name">
          Quần Thể Thao Nam 7 Ultra Shorts
        </h3>
        <div className="product-cart__info-price">
          <span className="product-cart__info-price--old">189.000đ</span>
          <span className="product-cart__info-price--new">159.000đ</span>
          <span className="product-cart__info-price--discount">-16%</span>
        </div>
        {/* <div className="product-cart__info-rating">
          <StarRateIcon fontSize="small" style={{ color: "#000" }} />
          <StarRateIcon fontSize="small" style={{ color: "#000" }} />
          <StarRateIcon fontSize="small" style={{ color: "#000" }} />
          <StarRateIcon fontSize="small" style={{ color: "#000" }} />
          <StarRateIcon fontSize="small" style={{ color: "#000" }} />
          <span>(4.9)</span>
          <span className="ml-2">Đã bán (web): 6139</span>
        </div> */}
      </div>

      <div className="product-cart__colors">
        <p className="product-cart__colors-title">
          Màu sắc:{" "}
          <span className="product-cart__colors-current">
            Xanh Forest Night
          </span>
        </p>
        <div className="product-cart__colors-list">
          <ButtonColor url="https://n7media.coolmate.me/uploads/June2025/ao-polo-premium-aircool-1221-be_copy.jpg?aio=w-100" />
          <ButtonColor url="https://n7media.coolmate.me/uploads/June2025/ao-polo-premium-aircool-1221-be_copy.jpg?aio=w-100" />
          <ButtonColor url="https://n7media.coolmate.me/uploads/June2025/ao-polo-premium-aircool-1221-be_copy.jpg?aio=w-100" />
        </div>
        <a href="#" className="product-cart__colors-link">
          Xem tất cả màu
        </a>
      </div>

      <div className="product-cart__sizes">
        <p className="product-cart__sizes-title">
          Kích thước: <span className="product-cart__sizes--current">3XL</span>
        </p>
        <div className="product-cart__sizes-list">
          <button className="product-cart__sizes-item">M</button>
          <button className="product-cart__sizes-item product-cart__sizes-item--disabled">
            L
          </button>
          <button className="product-cart__sizes-item product-cart__sizes-item--active">
            XL
          </button>
          <button className="product-cart__sizes-item">2XL</button>
          <button className="product-cart__sizes-item">3XL</button>
        </div>
        <a href="#" className="product-cart__sizes-guide">
          Hướng dẫn chọn size
        </a>
      </div>

      <div className="product-cart__add-to-cart">
        <div className="product-cart__add-to-cart-quantity">
          <MyButton className="product-cart__add-to-cart-quantity--btn">
            -
          </MyButton>
          <span className="product-cart__add-to-cart-quantity--value">1</span>
          <MyButton className="product-cart__add-to-cart-quantity-btn">
            +
          </MyButton>
        </div>
        <MyButton className="product-cart__add-to-cart-btn">
          Thêm vào giỏ
        </MyButton>
      </div>
    </div>
  );
};

export default AddToCartBar;
