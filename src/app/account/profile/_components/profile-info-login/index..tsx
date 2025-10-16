"use client";
import { AppDispatch, RootState } from "@/app/store";
import { getUsersProfileRequest } from "@/app/store/profile/profile.action";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function ProfileInfoLogin() {
  const dispatch = useDispatch<AppDispatch>();
  const { profile } = useSelector((state: RootState) => state.profile);
  const profileData = profile?.data;

  useEffect(() => {
    dispatch(getUsersProfileRequest());
  }, [dispatch]);
  return (
    <div className="profile__info__list">
      <div className="profile__info__item">
        <div className="profile__info__item__lable">
          <p>Email</p>
        </div>
        <div className="profile__info__item__value">
          <p>{profileData?.email}</p>
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
  );
}
