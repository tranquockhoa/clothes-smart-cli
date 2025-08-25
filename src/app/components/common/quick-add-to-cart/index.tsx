import { FC } from "react";
import * as React from "react";
import MyButton from "../../ui/button";
import "./quick-add-to-cart.scss";
import Grid from "@mui/material/Grid";
import { Box } from "@mui/material";

const QuickAddToCart: FC = () => {
  const sizeList = ["S", "M", "L", "XL", "2XL", "3XL"];

  return (
    <div className="quick-add-to-cart">
      <p className="quick-add-to-cart--text">Thêm nhanh vào giỏ hàng +</p>
      <div className="quick-add-to-cart__wrap-size ">
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={1}>
            {sizeList.map((size, index) => (
              <Grid key={index}>
                <MyButton className="quick-add-to-cart__wrap-size--button">
                  {size}
                </MyButton>
              </Grid>
            ))}
          </Grid>
        </Box>
      </div>
    </div>
  );
};

export default QuickAddToCart;
