"use client";
import { FC } from "react";
import LoginForm from "../login-form";
import React from "react";
import PersonIcon from "@mui/icons-material/Person";

const PopupLogin: FC = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    console.log("handle open");
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      {" "}
      <PersonIcon sx={{ cursor: "pointer" }} onClick={handleClickOpen} />
      <LoginForm
        isOpen={open}
        onClickOpen={handleClickOpen}
        onClose={handleClose}
      />
    </div>
  );
};

export default PopupLogin;
