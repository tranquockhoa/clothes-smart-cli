import { FC, useEffect } from "react";
import "./quick-add-to-cart.scss";
import Grid from "@mui/material/Grid";
import { Box } from "@mui/material";
import ButtonSize, { BUTTON_SIZES_SIZE_TYPES } from "../button-size";
import { useState } from "react";

const QuickAddToCart: FC = () => {
  const sizeList = ["S", "M", "L", "XL", "2XL", "3XL"];
  const [selectedSize, setSelectedSize] = useState("");

  return (
    <div className="quick-add-to-cart">
      <p className="quick-add-to-cart--text">Thêm nhanh vào giỏ hàng +</p>
      <div className="quick-add-to-cart__wrap-size">
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={1}>
            {sizeList.map((size, index) => (
              <Grid key={index}>
                <ButtonSize
                  className={`quick-add-to-cart__wrap-size--button ${selectedSize === size ? "quick-add-to-cart__wrap-size--button-active" : ""}`}
                  customSize={BUTTON_SIZES_SIZE_TYPES.SMALL}
                  sizeName={size}
                  onClick={() => {
                    console.log("Clicked size:", size);
                    setSelectedSize(size);
                  }}
                />
              </Grid>
            ))}
          </Grid>
        </Box>
      </div>
    </div>
  );
};

export default QuickAddToCart;
