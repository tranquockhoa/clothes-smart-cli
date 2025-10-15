"use client";
import { FC } from "react";
import React from "react";
import PersonIcon from "@mui/icons-material/Person";
import AuthPopup from "./_component/auth-popup";
import { useAppDispatch } from "@/app/hooks";
import { setPopupStatus } from "@/app/store/auth-popup/auth-pupop.store";

const PopupLogin: FC = () => {
  const dispatch = useAppDispatch();
  const handleClickOpen = () => {
    console.log("handle open");
    dispatch(setPopupStatus(true));
  };

  // const handleClose = () => {
  //   dispatch(setPopupStatus(false));
  // };

  return (
    <div>
      {" "}
      <PersonIcon sx={{ cursor: "pointer" }} onClick={handleClickOpen} />
      <AuthPopup />
    </div>
  );
};

export default PopupLogin;
