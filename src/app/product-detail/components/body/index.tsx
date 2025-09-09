import { Container } from "@mui/material";
import { FC } from "react";
import "./product-detail-body.scss";
import MyButton from "@/app/components/ui/button";
import StarRateIcon from "@mui/icons-material/StarRate";
import ShareIcon from "@mui/icons-material/Share";
import "@/app/styles/variable.scss";
import {
  BUTTON_COLOR_SIZE_TYPES,
  BUTTON_COLOR_OUTLINE_TYPES,
} from "@/app/components/common/button-color";
import ButtonColor from "@/app/components/common/button-color";
import Link from "@mui/material/Link";

const ProductDetailBody: FC = () => {
  return (
    <Container>
      <div className="product-detail-body">
        <div className="product-detail-body__left">
          <div className="product-detail-body__thumbs">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="product-detail-body__thumb">
                <img
                  src="https://n7media.coolmate.me/uploads/June2025/singlet-chay-bo-airush-gradient-_1-den-cut.jpg?aio=w-270"
                  alt="thumb"
                />
              </div>
            ))}
          </div>
          <div className="product-detail-body__preview">
            <img
              src="https://n7media.coolmate.me/uploads/June2025/singlet-chay-bo-airush-gradient-_1-den-cut.jpg?aio=w-600"
              alt="preview"
            />
          </div>
        </div>

        <div className="product-detail-body__right">
          <h2 className="product-detail-body__right__title">
            Singlet chạy bộ AirRush Gradient
          </h2>
          <div className="product-detail-body__right__rate">
            <div className="product-detail-body__right__rate-wrap-star">
              {" "}
              <StarRateIcon />
              <StarRateIcon />
              <StarRateIcon />
              <StarRateIcon />
              <StarRateIcon />
              <span>{"(5)"}</span>
            </div>
            <div className="product-detail-body__right__rate-wrap-share">
              {" "}
              <ShareIcon className="product-detail-body__right__rate-wrap-share-icon" />
              <span>Chia sẻ</span>
            </div>
          </div>
          <div className="product-detail-body__right__price">
            {" "}
            <div className="product-detail-body__right__price--discount">
              189.000đ
            </div>
            <div className="product-detail-body__right__price--nol">
              <p>
                189.000đ <span>-20%</span>
              </p>
            </div>
          </div>

          <div className="product-detail-body__right__delivery">
            <img
              src="https://www.coolmate.io/images/icons/icon4.svg"
              alt="Miễn phí vận chuyển"
            />
            <p> Miễn phí vận chuyển</p>
          </div>

          <div className="product-detail-body__right__discount">
            <p>Mã giảm giá</p>
          </div>
          <div className="product-detail-body__right__colors">
            <p>
              Màu sắc: <span>Trắng</span>
            </p>
            <div className="product-detail-body__right__color-list">
              <ButtonColor
                size={BUTTON_COLOR_SIZE_TYPES.MIDDLE}
                outline={BUTTON_COLOR_OUTLINE_TYPES.MIDDLE}
                url="https://n7media.coolmate.me/uploads/June2025/ao-polo-premium-aircool-1221-be_copy.jpg?aio=w-100"
              />
              <ButtonColor
                size={BUTTON_COLOR_SIZE_TYPES.MIDDLE}
                outline={BUTTON_COLOR_OUTLINE_TYPES.MIDDLE}
                url="https://n7media.coolmate.me/uploads/June2025/ao-polo-premium-aircool-1221-be_copy.jpg?aio=w-100"
              />
            </div>
          </div>
          <div className="product-detail-body__right__sizes">
            <p>
              Kích thước: <span>S</span>
            </p>
            {/* <div className="product-detail-body__right__sizes-list">
              {["S", "M", "L"].map((size, index) => (
                <ButtonSize
                  key={index}
                  customSize={BUTTON_SIZES_SIZE_TYPES.SMALL}
                  sizeName={size}
                  onClick={() => {
                    console.log("Clicked size:", size);
                    setSelectedSize(size);
                  }}
                />
              ))}
            </div> */}
          </div>
          <div className="product-detail-body__right__actions">
            <div className="qty-control">
              <MyButton
                sx={{ padding: 0, minWidth: "fit-content", color: "white" }}
              >
                -
              </MyButton>
              <span>1</span>
              <MyButton
                sx={{ padding: 0, minWidth: "fit-content", color: "white" }}
              >
                +
              </MyButton>
            </div>
            <MyButton
              sx={{
                backgroundColor: "black",
                width: "100%",
                height: 52,
                borderRadius: 9999,
                fontWeight: 600,
                fontSize: 16,
                color: "white",
              }}
              className="add-to-cart"
            >
              Thêm vào giỏ
            </MyButton>
          </div>
          <div className="product-detail-body__right__des">
            <Link
              sx={{
                display: "block",
                color: "#404040",
                fontWeight: 600,
                textDecoration: "underline solid black",
                textAlign: "center",
              }}
            >
              Mô tả sản phẩm
            </Link>
          </div>

          <div className="product-detail-body__right__policy">
            <div className="product-detail-body__right__policy--des">
              <img
                src="https://www.coolmate.me/icons/product/return.svg"
                alt=""
              />
              <p>
                Đổi trả cực dễ chỉ cần <br />
                số điện thoại
              </p>
            </div>
            <div className="product-detail-body__right__policy--des">
              <img
                src="	https://www.coolmate.me/icons/product/return-60.svg"
                alt=""
              />
              <p>
                60 ngày đổi trả (sản phẩm chưa qua sử dụng và còn nguyên nhãn
                mác)
              </p>
            </div>
            <div className="product-detail-body__right__policy--des">
              <img
                src="https://www.coolmate.me/icons/product/phone.svg"
                alt=""
              />
              <p>
                Hotline 1900.27.27.37 <br /> hỗ trợ từ 8h30 - 22h
              </p>
            </div>
            <div className="product-detail-body__right__policy--des">
              <img
                src="https://www.coolmate.me/icons/product/location.svg"
                alt=""
              />
              <p>Đến tận nơi nhận hàng trả, hoàn tiền trong 24h</p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ProductDetailBody;
