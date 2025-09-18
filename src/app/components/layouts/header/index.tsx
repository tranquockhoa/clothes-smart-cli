"use client";
import SearchInput from "./components/ui/search";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import { useEffect, useRef, useState } from "react";
import "./header.scss";
import PopupLogin from "./components/popup-login";

function Header() {
  const scrollPos = useRef(0);
  const [show, setShow] = useState(true);
  useEffect(() => {
    const handleScroll = () => {
      if (scrollPos.current < window.scrollY) {
        setShow(false);
      } else {
        setShow(true);
      }
      scrollPos.current = window.scrollY;
    };

    // Adding scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup function to remove the event listener
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  // console.log(scrollPos);
  return (
    <div className={"header-container"}>
      <div
        className={"header-container--top"}
        aria-hidden={!show}
        style={{
          height: show ? "32px" : "0px",
        }}
      >
        <div className={"label-left"}>
          <a href="">Về CLOTHES SMART</a>
          <span>|</span>
          <a href="">COOLXPRINT</a>
        </div>
        <div className={"label-right"}>
          <a href="">Coolclub</a> <span>|</span>
          <a href="">Blog</a> <span>|</span>
          <a href="">Trung tâm CSKH</a> <span>|</span>
          <a href="">Đăng nhập</a>
        </div>
      </div>
      <div className={"header-container--middle"}>
        <div className={"label-left"}>
          <a href="">
            <img src="https://www.coolmate.me/images/logo.png" alt="" />
          </a>
        </div>
        <div className={"label-middle"}>
          <ul>
            <li>
              <a href="">NAM</a>
            </li>
            <li>
              <a href="">NỮ</a>
            </li>
            <li>
              <a href="">THỂ THAO</a>
            </li>
          </ul>
        </div>
        <div className={"label-right"}>
          <SearchInput /> <PopupLogin />
          <a href="">
            <LocalMallIcon sx={{ color: "black" }} />
          </a>
        </div>
      </div>
      <div
        className={"header-container--bottom"}
        aria-hidden={!show}
        style={{
          height: show ? "32px" : "0px",
        }}
      >
        <p>
          SHORT CASUAL NHẸ MÁT ĐI MUÔN NƠI <span>⟶</span>
          <a href="">MUA NGAY</a>
        </p>
      </div>
    </div>
  );
}

export default Header;
