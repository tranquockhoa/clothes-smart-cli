import styles from "./header.module.scss";
import SearchInput from "./components/ui/search";
import LocalMallIcon from "@mui/icons-material/LocalMall";

function Header() {
  return (
    <div className={styles["header-container"]}>
      <div id="header-top" className={styles["header-container--top"]}>
        <div className={styles["label-left"]}>
          <a href="">Về CLOTHES SMART</a>
          <span>|</span>
          <a href="">COOLXPRINT</a>
        </div>
        <div className={styles["label-right"]}>
          <a href="">Coolclub</a> <span>|</span>
          <a href="">Blog</a> <span>|</span>
          <a href="">Trung tâm CSKH</a> <span>|</span>
          <a href="">Đăng nhập</a>
        </div>
      </div>
      <div className={styles["header-container--middle"]}>
        <div className={styles["label-left"]}>
          <a href="">
            <img src="https://www.coolmate.me/images/logo.png" alt="" />
          </a>
        </div>
        <div className={styles["label-middle"]}>
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
        <div className={styles["label-right"]}>
          <SearchInput />
          <a href="">
            <LocalMallIcon sx={{ color: "black" }} />
          </a>
        </div>
      </div>
      <div className={styles["header-container--bottom"]}>
        <p>
          SHORT CASUAL NHẸ MÁT ĐI MUÔN NƠI <span>⟶</span>
          <a href="">MUA NGAY</a>
        </p>
      </div>
    </div>
  );
}

export default Header;
