import { FC } from "react";
import QuickAddToCart from "../quick-add-to-cart";
import ButtonColor from "../button-color";
import "./product-review.scss";

interface ProductPreviewProps {
  url: string;
  urlOnHover: string;
  name: string;
  price: string;
  discount: string;
  priceDiscount: string;
}

const ProductReview: FC<ProductPreviewProps> = (props) => {
  return (
    <div className={"product-review"}>
      <a href="">
        <div className={"product-review__wrap-image"}>
          {/* {isHover && <QuickAddToCart />}  */}
          <QuickAddToCart />
          <img src={props.url} alt="" />
          <img
            className="product-review__wrap-image--hover"
            src={props.urlOnHover}
            alt=""
          />
        </div>
      </a>

      <div className={"item__des"}>
        <div className={"wrap-color"}>
          <ButtonColor url="https://n7media.coolmate.me/uploads/June2025/ao-polo-premium-aircool-1221-be_copy.jpg?aio=w-100" />
          <ButtonColor url="https://n7media.coolmate.me/uploads/June2025/ao-polo-premium-aircool-1221-be_copy.jpg?aio=w-100" />
        </div>
        <p>{props.name}</p>
        <div className={"price"}>
          <p className={"real-price"}>{props.price}</p>
          <span>{props.discount}</span>
          <p className={"discount-price"}>{props.priceDiscount}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductReview;
