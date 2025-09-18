"use client";

import { FC } from "react";
import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import MyButton from "@/app/components/ui/button";
import { useForm, SubmitHandler } from "react-hook-form";
import "./login-form.scss";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Visibility from "@mui/icons-material/Visibility";
import CloseIcon from "@mui/icons-material/Close";
import {
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
} from "@mui/material";

interface LoginFormProps {
  isOpen: boolean;
  onClose: () => void;
  onClickOpen: () => void;
}

interface IFormInput {
  email: string;
  password: number;
}

const LoginForm: FC<LoginFormProps> = ({ isOpen, onClose }) => {
  const { handleSubmit } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);
  const [showPassword, setShowPassword] = React.useState(false);

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
    <React.Fragment>
      <Dialog
        sx={{
          margin: "auto",
        }}
        PaperProps={{
          sx: {
            overflow: "unset",
          },
        }}
        open={isOpen}
        onClose={onClose}
        className="login-form"
      >
        <DialogTitle>
          <h2>Đăng nhập</h2>
        </DialogTitle>
        <DialogContent>
          <form onSubmit={handleSubmit(onSubmit)}>
            <TextField
              autoFocus
              required
              margin="dense"
              id="name"
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
          </form>
        </DialogContent>

        <DialogActions
          sx={{
            padding: "0px 24px 10px",
            fontSize: "12px",
            display: "flex",
            justifyContent: "space-between",
            color: "blue",
          }}
        >
          <MyButton
            sx={{
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
            padding: "0px 24px 20px",
            fontSize: "12px",
            display: "flex",
            justifyContent: "space-between",
            color: "blue",
          }}
        >
          <a className="login-form__link" href="">
            Đăng kí tài khoản mới
          </a>
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
          onClick={onClose}
        >
          <CloseIcon sx={{ color: "white" }} />
        </IconButton>
      </Dialog>
    </React.Fragment>
  );
};

export default LoginForm;
