import { FC } from "react";
import MyButton from "../../ui/button";
import "./button-color.scss";

interface ButtonColorProps {
  url: string;
}

const ButtonColor: FC<ButtonColorProps> = (props) => {
  return (
    <MyButton
      // className="button-color"
      sx={{
        height: 22,
        width: 36,
        padding: 0,
        minWidth: "unset",
        borderRadius: "9999px",
        border: "1px solid white",
        outline: " 1px solid black",
        overflow: "hidden",
      }}
    >
      <img className="button-color__image" src={props.url} alt="color" />
    </MyButton>
  );
};

export default ButtonColor;
