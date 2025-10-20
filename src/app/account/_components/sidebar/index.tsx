"use client";
import MyButton from "@/app/components/ui/button";
import { FC, useState } from "react";
import "./side-bar.scss";
import EastIcon from "@mui/icons-material/East";
import Profile from "../../profile/page";
import Order from "../../order/page";
import Link from "next/link";

const BUTTON_TYPE = {
  PROFILE: "profile",
  ORDER: "order",
};

const SideBar: FC = () => {
  const [activeButton, setActiveButton] = useState(BUTTON_TYPE.ORDER);

  const renderContent = (type: string) => {
    setActiveButton(type);

    if (activeButton === BUTTON_TYPE.PROFILE) {
      return <Profile />;
    } else if (activeButton === BUTTON_TYPE.ORDER) {
      return <Order />;
    }
  };

  return (
    <div className="sidebar">
      <MyButton
        className="sidebar__btn"
        sx={{
          backgroundColor: "black",
          textTransform: "none",
          display: "flex",
          justifyContent: "space-between",
        }}
        onClick={() => {
          renderContent(BUTTON_TYPE.PROFILE);
        }}
      >
        <div className="sidebar__btn__title">
          <img
            src="https://mcdn.coolmate.me/image/September2023/mceclip6_34.png"
            alt=""
          />
          <Link className="sidebar__btn--link" href={"/account/profile"}>
            Thông tin tài khoản
          </Link>
        </div>
        <EastIcon
          sx={{
            backgroundColor: "black",
            textTransform: "none",
            display: "flex",
            justifyContent: "space-between",
          }}
        />
      </MyButton>
      <MyButton
        className="sidebar__btn"
        sx={{
          backgroundColor: "black",
          textTransform: "none",
          display: "flex",
          justifyContent: "space-between",
        }}
        onClick={() => {
          renderContent(BUTTON_TYPE.ORDER);
        }}
      >
        <div className="sidebar__btn__title">
          <img
            src="https://mcdn.coolmate.me/image/September2023/mceclip6_34.png"
            alt=""
          />
          <Link className="sidebar__btn--link" href={"/account/order"}>
            Lịch sử đơn hàng
          </Link>
        </div>
        <EastIcon sx={{ color: "white" }} />
      </MyButton>
      <MyButton
        className="sidebar__btn"
        sx={{
          backgroundColor: "black",
          textTransform: "none",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div className="sidebar__btn__title">
          <img
            src="https://mcdn.coolmate.me/image/September2023/mceclip6_34.png"
            alt=""
          />
          <p>Đăng xuất</p>
        </div>
        <EastIcon sx={{ color: "white" }} />
      </MyButton>
    </div>
  );
};

export default SideBar;
