import ProductReview from "@/app/components/common/product-review";
import "./product-list.scss";
import Grid from "@mui/material/Grid";
import SplitButton from "../split-button";
import MultiFilter from "../multi-filter";

const datas = [
  {
    url: "https://n7media.coolmate.me/uploads/June2025/t-shirt-chay-bo-airush-gradient-cut-_2-trang.jpg?aio=w-585",
  },
  {
    url: "https://n7media.coolmate.me/uploads/June2025/t-shirt-chay-bo-airush-gradient-cut-_2-trang.jpg?aio=w-585",
  },
  {
    url: "https://n7media.coolmate.me/uploads/June2025/t-shirt-chay-bo-airush-gradient-cut-_2-trang.jpg?aio=w-585",
  },
  {
    url: "https://n7media.coolmate.me/uploads/June2025/t-shirt-chay-bo-airush-gradient-cut-_2-trang.jpg?aio=w-585",
  },
  {
    url: "https://n7media.coolmate.me/uploads/June2025/t-shirt-chay-bo-airush-gradient-cut-_2-trang.jpg?aio=w-585",
  },
  {
    url: "https://n7media.coolmate.me/uploads/June2025/t-shirt-chay-bo-airush-gradient-cut-_2-trang.jpg?aio=w-585",
  },
  {
    url: "https://n7media.coolmate.me/uploads/June2025/t-shirt-chay-bo-airush-gradient-cut-_2-trang.jpg?aio=w-585",
  },
];

const urlOnHover =
  "https://n7media.coolmate.me/uploads/August2025/combo-tank-top-va-quan-short-the-thao-tu-hao-viet-nam-1-21-navy-navy_77.jpg?aio=w-585";

export default function ProductList() {
  return (
    <div className="product-list">
      <div className="product-list__title">
        <h1>Quần Short Nữ</h1>
      </div>

      <div className="product-list__split-btn">
        <MultiFilter />
        <SplitButton />
      </div>
      <div className="product-list__wrap-product">
        <div className="product-list__wrap-product--item">
          <Grid container spacing={2}>
            {datas.map((data, id) => (
              <Grid key={id} size={3}>
                <ProductReview
                  url={data.url}
                  urlOnHover={urlOnHover}
                  name="Áo ba lỗ nam mặc trong thoáng khí nhanh khô Excool"
                  price="399.000đ"
                  discount="16%"
                  priceDiscount="379.000đ"
                />
              </Grid>
            ))}
          </Grid>
        </div>
      </div>
    </div>
  );
}
