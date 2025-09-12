import { FC } from "react";
import "./product-detail-description.scss";
import { Container } from "@mui/material";

const ProductDetailDescription: FC = () => {
  return (
    <div className="product-detail-description">
      <Container>
        <h2>MÔ TẢ SẢN PHẨM</h2>
        <div className="product-detail-description__detail">
          <div className="product-detail-description__detail__left">
            <div className="product-detail-description__detail__left__advance">
              <div className="product-detail-description__detail__left__advance--des">
                <img
                  src="https://n7media.coolmate.me//uploads/January2025/mceclip12_62.png?aio=w-80"
                  alt="Nhanh khô"
                />
                <p>Nhanh khô</p>
              </div>
              <div className="product-detail-description__detail__left__advance--des">
                <img
                  src="https://n7media.coolmate.me//uploads/January2025/mceclip8_9.png?aio=w-80"
                  alt="Siêu nhẹ"
                />
                <p>Siêu nhẹ</p>
              </div>
              <div className="product-detail-description__detail__left__advance--des">
                <img
                  src="https://n7media.coolmate.me//uploads/January2025/mceclip3_91.png?aio=w-80"
                  alt="Thấm hút"
                />
                <p>Thấm hút</p>
              </div>
            </div>

            <div className="product-detail-description__detail__left__table-info">
              <ul>
                <li>
                  <h4>Mã sản phẩm</h4>
                  <p>SHA267</p>
                </li>
                <li>
                  <h4>Chất liệu</h4>
                  <p>100% Cotton</p>
                </li>
                <li>
                  <h4>Kiểu dáng</h4>
                  <p>Regular</p>
                </li>{" "}
                <li>
                  <h4>Mã sản phẩm</h4>
                  <p>SHA267</p>
                </li>
                <li>
                  <h4>Chất liệu</h4>
                  <p>100% Cotton</p>
                </li>
                <li>
                  <h4>Kiểu dáng</h4>
                  <p>Regular</p>
                </li>{" "}
                <li>
                  <h4>Mã sản phẩm</h4>
                  <p>SHA267</p>
                </li>
                <li>
                  <h4>Chất liệu</h4>
                  <p>100% Cotton</p>
                </li>
                <li>
                  <h4>Kiểu dáng</h4>
                  <p>Regular</p>
                </li>{" "}
                <li>
                  <h4>Kiểu dáng</h4>
                  <p>Regular</p>
                </li>{" "}
                <li>
                  <h4>Mã sản phẩm</h4>
                  <p>SHA267</p>
                </li>{" "}
                <li>
                  <h4>Kiểu dáng</h4>
                  <p>Regular</p>
                </li>{" "}
                <li>
                  <h4>Kiểu dáng</h4>
                  <p>Regular</p>
                </li>
              </ul>
            </div>
            <p className="made-in">* Proudly Made In Vietnam</p>
          </div>

          <div className="product-detail-description__detail__right">
            <img
              src="https://n7media.coolmate.me/uploads/June2025/t-shirt-chay-bo-nu-airush-gradient-thumb-1-1.png"
              alt="image"
              loading="lazy"
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ProductDetailDescription;
