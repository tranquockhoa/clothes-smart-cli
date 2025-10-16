"use client";
import { FC, useEffect } from "react";
import React from "react";
import PersonIcon from "@mui/icons-material/Person";
import AuthPopup from "./_component/auth-popup";
import { useAppDispatch, useAppSelector } from "@/app/hooks";
import { setPopupStatus } from "@/app/store/auth-popup/auth-pupop.store";
import { Box } from "@mui/material";
import { useRouter } from "next/navigation";
import { setLoginState } from "@/app/store/login/login.store";
const PopupLogin: FC = () => {
  const router = useRouter();

  const dispatch = useAppDispatch();
  const handleClickOpen = () => {
    console.log("handle open");
    dispatch(setPopupStatus(true));
  };

  // const handleClose = () => {
  //   dispatch(setPopupStatus(false));
  // };
  const loginStatus = useAppSelector((state) => {
    return state.login.status;
  });
  const navToAccount = () => {
    router.push("/account/profile");
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    token ? dispatch(setLoginState(true)) : dispatch(setLoginState(false));
  }, []);

  const render = () => {
    if (loginStatus) {
      return (
        <Box
          component="img"
          src="https://mcdn.coolmate.me/image//October2023/mceclip3_72.png"
          alt="icon"
          sx={{
            width: 30,
            height: 30,
            borderRadius: 2,
            objectFit: "cover",
          }}
          onClick={navToAccount}
        />
      );
    } else if (loginStatus === false) {
      return (
        <PersonIcon sx={{ cursor: "pointer" }} onClick={handleClickOpen} />
      );
    } else return;
  };

  return (
    <div>
      {render()}
      <AuthPopup />
    </div>
  );
};

export default PopupLogin;
