import { FC } from "react";
import styles from "./small-text.module.scss";

interface SmallTextProps {
  text: string;
  className?: string;
}

const SmallText: FC<SmallTextProps> = ({ text, className = "" }) => {
  return <p className={`${styles["small-text"]} ${className}`}>{text}</p>;
};

export default SmallText;
