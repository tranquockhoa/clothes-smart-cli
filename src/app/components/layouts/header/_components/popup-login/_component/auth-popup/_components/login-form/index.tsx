"use client";

import { FC } from "react";
import * as React from "react";
import DialogActions from "@mui/material/DialogActions";
import "./login-form.scss";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Visibility from "@mui/icons-material/Visibility";
import CloseIcon from "@mui/icons-material/Close";
import {
  DialogTitle,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
} from "@mui/material";
import MyButton from "@/app/components/ui/button";

import {
  setCurrentForm,
  setPopupStatus,
} from "@/app/store/auth-popup/auth-pupop.store";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { ILoginParams } from "@/app/interface/auth";
import { loginApi } from "@/app/api/auth.api";
import { useDispatch } from "react-redux";
import { setLoginState } from "@/app/store/login/login.store";

const LoginForm: FC = () => {
  const [showPassword, setShowPassword] = React.useState(false);
  const { control, handleSubmit } = useForm<ILoginParams>();
  const dispatch = useDispatch();

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

  const onSubmit: SubmitHandler<ILoginParams> = async (values) => {
    try {
      const res = await loginApi(values);
      if (res.status) {
        localStorage.setItem("token", res.data.accessToken);
        dispatch(setPopupStatus(false));
        dispatch(setLoginState(true));
      }
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  return (
    <div className="login-form">
      <DialogTitle>
        <h2>Đăng nhập</h2>
      </DialogTitle>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="email"
          control={control}
          render={({ field }) => {
            return (
              <TextField
                {...field}
                autoFocus
                required
                margin="dense"
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
            );
          }}
        />

        <Controller
          control={control}
          name="password"
          render={({ field }) => {
            return (
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
                  {...field}
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
                          showPassword
                            ? "hide the password"
                            : "display the password"
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
            );
          }}
        />
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
            type="submit"
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
      </form>

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
            dispatch(setCurrentForm("register"));
          }}
        >
          Đăng kí tài khoản mới
        </div>
        <div
          className="login-form__link"
          onClick={() => {
            dispatch(setCurrentForm("forgotpassword"));
          }}
        >
          Quên mật khẩu
        </div>
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

export default LoginForm;
