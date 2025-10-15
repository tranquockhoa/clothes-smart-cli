"use client";

import { FC } from "react";
import * as React from "react";
import DialogActions from "@mui/material/DialogActions";

import CloseIcon from "@mui/icons-material/Close";
import { DialogTitle, IconButton, TextField } from "@mui/material";
import MyButton from "@/app/components/ui/button";

const ForgotPassword: FC = () => {
  return (
    <div className="forgot-password-form">
      <DialogTitle>
        <h2>Cấp lại mật khẩu</h2>
      </DialogTitle>
      <form>
        <TextField
          autoFocus
          required
          margin="dense"
          id="email"
          name="email"
          label="Nhập địa chỉ email của bạn"
          type="email"
          fullWidth
          variant="outlined"
          sx={{
            "& .MuiOutlinedInput-root": {
              borderRadius: 9999,
            },

            "& .MuiOutlinedInput-input": {
              padding: "12px 24px",
            },
          }}
        ></TextField>
      </form>

      <DialogActions
        sx={{
          padding: 0,
          marginTop: "10px",
          fontSize: "12px",
          display: "flex",
          justifyContent: "space-between",
          color: "blue",
        }}
      >
        <MyButton
          sx={{
            height: "40px",
            width: "100%",
            color: "white",
            backgroundColor: "black",
            borderRadius: 9999,
          }}
        >
          Gửi yêu cầu
        </MyButton>
      </DialogActions>

      <IconButton
        sx={{
          backgroundColor: "black",
          border: "1px solid white",
          width: "40px",
          height: "40px",
          position: "absolute",
          top: "-20px",
          right: "-20px",

          "&:hover": {
            backgroundColor: "#222",
          },
        }}
      >
        <CloseIcon sx={{ color: "white" }} />
      </IconButton>
    </div>
  );
};

export default ForgotPassword;
