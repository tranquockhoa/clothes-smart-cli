"use client";

import { FC, useState } from "react";
import {
  Box,
  Typography,
  IconButton,
  Select,
  MenuItem,
  Checkbox,
  Button,
} from "@mui/material";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

interface CartItemProps {
  image: string;
  name: string;
  brand: string;
  sizeList: string[];
  sizeSelected: string;
  colorList: string[];
  colorSelected: string;
  quantity: number;
  price: number;
  oldPrice?: number;
  onRemove?: () => void;
}

const CartItem: FC<CartItemProps> = ({
  image,
  name,
  sizeList,
  sizeSelected,
  colorList,
  colorSelected,
  quantity,
  price,
  oldPrice,
  onRemove,
}) => {
  const [size, setSize] = useState(sizeSelected);
  const [color, setColor] = useState(colorSelected);

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      borderBottom="1px solid #eee"
      py={2}
      gap={2}
    >
      <Box display="flex" alignItems="center" gap={2} flex={1}>
        <Checkbox />
        <Box
          component="img"
          src={image}
          alt={name}
          sx={{ width: 102, height: 150, objectFit: "cover", borderRadius: 2 }}
        />
        <Box display="flex" flexDirection="column">
          <Typography fontWeight={500}>{name}</Typography>
          <Typography variant="body2" color="text.secondary">
            {color} / {size}
          </Typography>

          <Box display="flex" gap={1} mt={1}>
            <Select
              sx={{ borderRadius: 9999, color: "gray" }}
              size="small"
              value={color}
            >
              {colorList.map((c) => (
                <MenuItem
                  onClick={() => {
                    setColor(c);
                  }}
                  sx={{ borderRadius: 9999, color: "gray" }}
                  key={c}
                  value={c}
                >
                  {c}
                </MenuItem>
              ))}
            </Select>
            <Select
              sx={{
                borderRadius: 9999,
                color: "gray",
              }}
              size="small"
              value={size}
            >
              {sizeList.map((s) => (
                <MenuItem
                  key={s}
                  value={s}
                  onClick={() => {
                    setSize(s);
                  }}
                >
                  {s}
                </MenuItem>
              ))}
            </Select>
          </Box>

          <Button
            startIcon={<DeleteOutlineIcon />}
            color="inherit"
            onClick={onRemove}
            sx={{
              width: 40,
              mt: 1,
              textTransform: "none",
              fontSize: "0.85rem",
              color: "gray",
            }}
          >
            Xóa
          </Button>
        </Box>
      </Box>

      <Box
        sx={{ border: "1px solid #eee", borderRadius: 9999 }}
        display="flex"
        alignItems="center"
        gap={1}
      >
        <IconButton size="small">
          <RemoveIcon />
        </IconButton>
        <Typography>{quantity}</Typography>
        <IconButton size="small">
          <AddIcon />
        </IconButton>
      </Box>

      <Box textAlign="right" minWidth={120}>
        <Typography fontWeight={600}>
          {price.toLocaleString("vi-VN")}đ
        </Typography>
        {oldPrice && (
          <Typography
            variant="body2"
            sx={{ textDecoration: "line-through", color: "text.secondary" }}
          >
            {oldPrice.toLocaleString("vi-VN")}đ
          </Typography>
        )}
      </Box>
    </Box>
  );
};

export default CartItem;
