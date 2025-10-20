"use client";
import { FC } from "react";
import "./cart-form.scss";
import * as React from "react";
import { alpha, styled } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";

const BootstrapInput = styled(InputBase)(({ theme }) => ({
  "label + &": {
    marginTop: theme.spacing(3),
  },
  "& .MuiInputBase-input": {
    borderRadius: "9999px",
    position: "relative",
    backgroundColor: "#F3F6F9",
    border: "1px solid",
    borderColor: "#E0E3E7",
    fontSize: 16,
    width: "100%",
    padding: "10px 12px",
    transition: theme.transitions.create([
      "border-color",
      "background-color",
      "box-shadow",
    ]),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    "&:focus": {
      boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
      borderColor: theme.palette.primary.main,
    },
    ...theme.applyStyles("dark", {
      backgroundColor: "#1A2027",
      borderColor: "#2D3843",
    }),
  },
}));

const CartForm: FC = () => {
  return (
    <Box className="cart-form" component="form" noValidate>
      <div className="cart-form__top">
        <FormControl>
          <InputLabel
            sx={{
              top: "8px",
              borderRadius: 9999,
            }}
            shrink
            htmlFor="fullname-input"
          >
            Họ và tên
          </InputLabel>
          <BootstrapInput
            placeholder="Nhập họ tên của bạn"
            id="fullname-input"
          />
        </FormControl>

        <FormControl>
          <InputLabel sx={{ top: "8px" }} shrink htmlFor="phone-number-input">
            Số điện thoại
          </InputLabel>
          <BootstrapInput
            placeholder="Nhập họ tên của bạn"
            id="phone-number-input"
          />
        </FormControl>
      </div>
      <FormControl>
        <InputLabel sx={{ top: "8px" }} shrink htmlFor="email-input">
          Số điện thoại
        </InputLabel>
        <BootstrapInput
          disabled
          defaultValue="email"
          placeholder="Nhập số điện thoại"
          id="email-input"
        />
      </FormControl>

      <FormControl>
        <InputLabel sx={{ top: "8px" }} shrink htmlFor="address-input">
          Địa chỉ
        </InputLabel>
        <BootstrapInput placeholder="Nhập địa chỉ" id="address-input" />
      </FormControl>

      <FormControl>
        <InputLabel sx={{ top: "8px" }} shrink htmlFor="note-input">
          Ghi chú
        </InputLabel>
        <BootstrapInput placeholder="Ghi chú" id="note-input" />
      </FormControl>
    </Box>
  );
};

export default CartForm;
