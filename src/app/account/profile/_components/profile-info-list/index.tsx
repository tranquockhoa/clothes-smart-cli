import { FC } from "react";

const ProfileInfoList: FC = () => {
  return (
    <div className="profile__info__list">
      <div className="profile__info__item">
        <div className="profile__info__item__lable">
          <p>Họ và tên</p>
        </div>
        <div className="profile__info__item__value">
          <p>Khoa trần</p>
        </div>
      </div>
      <div className="profile__info__item">
        <div className="profile__info__item__lable">
          <p>Số điện thoại</p>
        </div>
        <div className="profile__info__item__value">
          <p>0886719412</p>
        </div>
      </div>
      <div className="profile__info__item">
        <div className="profile__info__item__lable">
          <p>Giới tính</p>
        </div>
        <div className="profile__info__item__value">
          <p>Không tiết lộ</p>
        </div>
      </div>
      <div className="profile__info__item">
        <div className="profile__info__item__lable">
          <p>Ngày sinh</p>
        </div>
        <div className="profile__info__item__value">
          <p>01/01/2001</p>
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
