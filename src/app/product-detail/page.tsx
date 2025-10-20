import { FC } from "react";
import ProductDetailBody from "./components/body";
import ProductDetailDescription from "./components/description";
import "./page.scss";
const ProductDetail: FC = () => {
  return (
    <div className="product-detail">
      {/* <AddToCartBar /> */}
      <ProductDetailBody />
      <ProductDetailDescription />
    </div>
  );
};

export default ProductDetail;
