"use client";
import { AppDispatch, RootState } from "@/app/store";
import { getUsersProfileRequest } from "@/app/store/profile/profile.action";
import { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const ProfileInfoList: FC = () => {
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
          <p>Họ và tên</p>
        </div>
        <div className="profile__info__item__value">
          <p>{profileData?.name ?? ""}</p>
        </div>
      </div>
      <div className="profile__info__item">
        <div className="profile__info__item__lable">
          <p>Số điện thoại</p>
        </div>
        <div className="profile__info__item__value">
          <p>{profileData?.phone}</p>
        </div>
      </div>
      <div className="profile__info__item">
        <div className="profile__info__item__lable">
          <p>Giới tính</p>
        </div>
        <div className="profile__info__item__value">
          <p>{profileData?.gender}</p>
        </div>
      </div>
      <div className="profile__info__item">
        <div className="profile__info__item__lable">
          <p>Ngày sinh</p>
        </div>
        <div className="profile__info__item__value">
          <p>{profileData?.dob}</p>
        </div>
      </div>
      <div className="profile__info__item">
        <div className="profile__info__item__lable">
          <p>Chiều cao</p>
        </div>
        <div className="profile__info__item__value">
          <p>160cm</p>
        </div>
      </div>
      <div className="profile__info__item">
        <div className="profile__info__item__lable">
          <p>Cân nặng</p>
        </div>
        <div className="profile__info__item__value">
          <p>50kg</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfoList;
