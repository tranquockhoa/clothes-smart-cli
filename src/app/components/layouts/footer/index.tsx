import styles from "./footer.module.scss";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import { Grid } from "@mui/material";

function Footer() {
  return (
    <div className={styles["footer"]}>
      <div className={`${styles["footer-container"]} content`}>
        <Grid container spacing={5}>
          <Grid size={4}>
            <div className={styles["footer__left"]}>
              <h2>CLOTHES-SMART lắng nghe bạn</h2>
              <p>
                Chúng tôi luôn trân trọng và mong đợi nhận được mọi ý kiến đóng
                góp từ khách hàng để có thể nâng cấp trải nghiệm dịch vụ và sản
                phẩm tốt hơn nữa.
              </p>
              <button>Đóng góp ý kiến</button>
            </div>
          </Grid>
          <Grid size={4}>
            <div className={styles["footer__center"]}>
              <div className={styles["wrap-contact"]}>
                <div className={styles["footer__center--contact"]}>
                  <LocalPhoneIcon sx={{ width: 40, height: 40 }} />
                  <div className="wrap-text">
                    <p>Hotline</p>
                    <p>1900.272737 - 028.7777.2737</p>
                  </div>
                </div>
                <div className={styles["footer__center--contact"]}>
                  <EmailIcon sx={{ width: 40, height: 40 }} />
                  <div className="wrap-text">
                    <p>Email</p>
                    <p>Cool@coolmate.me</p>
                  </div>
                </div>
              </div>
            </div>
          </Grid>
          <Grid size={4}>
            <div className={styles["footer__right"]}>
              <img
                src="https://www.coolmate.me/images/footer/icon-facebook.svg"
                alt="svg"
              />
              <img
                src="https://www.coolmate.me/images/footer/icon-zalo.svg"
                alt=""
              />
              <img
                src="https://www.coolmate.me/images/footer/icon-tiktok.svg"
                alt=""
              />
              <img
                src="	https://www.coolmate.me/images/footer/icon-instagram.svg"
                alt=""
              />
              <img
                src="https://www.coolmate.me/images/footer/icon-youtube.svg"
                alt=""
              />
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Footer;
