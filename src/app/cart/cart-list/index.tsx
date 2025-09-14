import { FC } from "react";
import CartItem from "../cart-item";
import { Box, Button } from "@mui/material";

const CartList: FC = () => {
  return (
    <div>
      <Button sx={{ textTransform: "none", color: "gray" }}>Xóa tất cả</Button>{" "}
      <Box
        sx={{ border: "1px solid #eee", borderRadius: 9999 }}
        display="flex"
        alignItems="center"
        gap={1}
      ></Box>
      <CartItem
        image="https://n7media.coolmate.me/uploads/December2024/24CM.MAWCS.JGZ996_-_Buluga_1.jpg?aio=w-300"
        name="Quần Jogger nam thể thao Studio Woven"
        brand="Rêu Buluga"
        sizeSelected="XL"
        sizeList={["XL", "L", "M"]}
        colorSelected="Đen"
        colorList={["Đen", "Trắng", "Vàng"]}
        quantity={3}
        price={1137000}
        oldPrice={1197000}
        onRemove={() => console.log("Removed item")}
      />
      <CartItem
        image="https://n7media.coolmate.me/uploads/December2024/24CM.MAWCS.JGZ996_-_Buluga_1.jpg?aio=w-300"
        name="Quần Jogger nam thể thao Studio Woven"
        brand="Rêu Buluga"
        sizeSelected="XL"
        sizeList={["XL", "L", "M"]}
        colorSelected="Đen"
        colorList={["Đen", "Trắng", "Vàng"]}
        quantity={3}
        price={1137000}
        oldPrice={1197000}
        onRemove={() => console.log("Removed item")}
      />
    </div>
  );
};

export default CartList;
