import React from "react";
import "./page.scss";
import MyButton from "@/app/components/ui/button";
import ProfileInfoList from "./form/_components/profile-info-list";
import PopupEditProfile from "./form/_components/popup-edit-profile";

export default function Profile() {
  return (
    <div className="profile">
      <h1 className="profile__title">Thông tin tài khoản</h1>
      <ProfileInfoList />
      <PopupEditProfile />

      <h2 className="profile__account">Thông tin đăng nhập</h2>
      <div className="profile__info__list">
        <div className="profile__info__item">
          <div className="profile__info__item__lable">
            <p>Email</p>
          </div>
          <div className="profile__info__item__value">
            <p>wibutran14032003@gmail.com</p>
          </div>
        </div>
        <div className="profile__info__item">
          <div className="profile__info__item__lable">
            <p>Mật khẩu</p>
          </div>
          <div className="profile__info__item__value">
            <p>*******</p>
          </div>
        </div>
      </div>

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
