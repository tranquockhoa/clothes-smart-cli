"use client";

import { FC } from "react";
import * as React from "react";
import DialogActions from "@mui/material/DialogActions";
import "./register-form.scss";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Visibility from "@mui/icons-material/Visibility";
import CloseIcon from "@mui/icons-material/Close";
import DialogTitle from "@mui/material/DialogTitle";

import {
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
} from "@mui/material";
import MyButton from "@/app/components/ui/button";
import { useAppDispatch } from "@/app/hooks";
import { setCurrentForm } from "@/app/store/auth-popup/auth-pupop.store";

const RegisterForm: FC = () => {
  const [showPassword, setShowPassword] = React.useState(false);

  const dispatch = useAppDispatch();

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    event.preventDefault();
  };

  const handleMouseUpPassword = (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    event.preventDefault();
  };

  return (
    <div className="register-form">
      <DialogTitle>
        <h2>Đăng kí tài khoản</h2>
      </DialogTitle>
      <form>
        <div className="register-form__info">
          <TextField
            autoFocus
            required
            margin="dense"
            id="full-name"
            name="full-name"
            label="Nhập họ và tên"
            type="text"
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
          <TextField
            autoFocus
            required
            margin="dense"
            id="phone-number"
            name="phone-number"
            label="Nhập số điện thoại"
            type=""
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
        </div>

        <TextField
          autoFocus
          required
          margin="dense"
          id="email"
          name="email"
          label="Nhập địa chỉ email"
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

        <FormControl
          required
          sx={{
            m: 1,
            width: "100%",
            padding: 0,
            margin: 0,
            marginTop: "10px",
            borderRadius: 9999,
          }}
          variant="outlined"
        >
          <InputLabel htmlFor="outlined-adornment-password">
            Nhập mật khẩu
          </InputLabel>
          <OutlinedInput
            sx={{
              borderRadius: "9999px",

              "& .MuiOutlinedInput-input": {
                padding: "12px 24px",
              },
            }}
            id="outlined-adornment-password"
            type={showPassword ? "text" : "password"}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label={
                    showPassword ? "hide the password" : "display the password"
                  }
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  onMouseUp={handleMouseUpPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Nhập mật khẩu"
          />
        </FormControl>
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
          Đăng nhập
        </MyButton>
      </DialogActions>

      <DialogActions
        sx={{
          marginTop: "12px",
          fontSize: "12px",
          display: "flex",
          justifyContent: "space-between",
          color: "blue",
        }}
      >
        <div
          className="login-form__link"
          onClick={() => {
            dispatch(setCurrentForm("login"));
          }}
        >
          Đăng nhập
        </div>
        <a className="login-form__link" href="">
          Quên mật khẩu
        </a>
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

export default RegisterForm;
