"use client";

import { FC } from "react";
import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import CloseIcon from "@mui/icons-material/Close";
import LoginForm from "./_components/login-form";
import { IconButton } from "@mui/material";
import RegisterForm from "./_components/register-form";
import { useAppSelector, useAppDispatch } from "@/app/hooks";
import {
  resetCurrentForm,
  setPopupStatus,
} from "@/app/store/auth-popup/auth-pupop.store";
import ForgotPassword from "./_components/forgot-password";

// interface AuthPopupProps {
//   isOpen: boolean;
//   onClose: () => void;
// }

const AuthPopup: FC = () => {
  const isOpen = useAppSelector((state) => state.authPopup.open);
  const dispatch = useAppDispatch();

  const onClose = () => {
    dispatch(setPopupStatus(false));
    dispatch(resetCurrentForm());
  };
  const currentForm = useAppSelector((state) => state.authPopup.currentForm);
  const rederForm = () => {
    switch (currentForm) {
      case "register":
        return <RegisterForm />;

      case "forgotpassword":
        return <ForgotPassword />;

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
        <DialogContent sx={{ minWidth: "500px" }}>{rederForm()}</DialogContent>

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
