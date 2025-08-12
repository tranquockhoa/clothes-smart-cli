import { FC } from "react";
import styles from "./content-banner.module.scss";
import MyButton from "@/app/components/ui/button";

interface ContentBannerProps {
  title: string;
  description: string;
}

const testContentBanner: ContentBannerProps = {
  title: "KHÁM PHÁ NGAY",
  description: "Nhập COOLNEW Giảm 30 đơn đầu tiên từ 199k",
};

const ContentBanner: FC<ContentBannerProps> = () => {
  return (
    <div className={`${styles["content-banner"]} content`}>
      <h2 className="">{testContentBanner.title}</h2>
      <p>{testContentBanner.description}</p>
      <MyButton className={styles["content-banner--btn"]}>Mua ngay</MyButton>
    </div>
  );
};

export default ContentBanner;
