"use client";

import { FC } from "react";
import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import CloseIcon from "@mui/icons-material/Close";
import LoginForm from "../login-form";
import { IconButton } from "@mui/material";
import RegisterForm from "../register-form";
import { useAppSelector, useAppDispatch } from "@/app/hooks";
import { setPopupStatus } from "@/app/store/auth-popup/auth-pupop.store";
// interface AuthPopupProps {
//   isOpen: boolean;
//   onClose: () => void;
// }

const AuthPopup: FC = () => {
  const isOpen = useAppSelector((state) => state.authPopup.open);
  const dispatch = useAppDispatch();

  const onClose = () => {
    dispatch(setPopupStatus(false));
  };
  const currentForm = useAppSelector((state) => state.authPopup.currentForm);
  const rederForm = () => {
    switch (currentForm) {
      case "register":
        return <RegisterForm />;

      default:
        return <LoginForm />;
    }
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
        <DialogContent>{rederForm()}</DialogContent>

        {/* <DialogActions
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
        </DialogActions> */}

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

export default AuthPopup;
