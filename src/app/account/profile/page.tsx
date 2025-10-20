import React from "react";
import "./page.scss";
import MyButton from "@/app/components/ui/button";
import ProfileInfoList from "./_components/profile-info-list";
import PopupEditProfile from "./_components/popup-edit-profile";

import ProfileInfoLogin from "./_components/profile-info-login/index.";

export default function Profile() {
  return (
    <div className="profile">
      <h1 className="profile__title">Thông tin tài khoản</h1>
      <ProfileInfoList />
      <PopupEditProfile />
      <h2 className="profile__account">Thông tin đăng nhập</h2>
      <ProfileInfoLogin />

      <MyButton
        sx={{
          marginTop: "24px",
          padding: "14px 40px",
          border: "1px solid black",
          borderRadius: 9999,
          color: "black",
          "&:hover": {
            backgroundColor: "black",
            color: "#fff",
          },
        }}
        className="profile__btn profile__btn--update"
      >
        Cập nhật
      </MyButton>
    </div>
  );
}
