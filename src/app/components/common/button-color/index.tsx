import { FC } from "react";
import MyButton from "../../ui/button";
import "./button-color.scss";

interface ButtonColorProps {
  url: string;
  type?: number;
  size: string;
  outline: string;
}

export const BUTTON_COLOR_SIZE_TYPES = {
  SMALL: "SMALL",
  MIDDLE: "MIDDLE",
};

export const BUTTON_COLOR_OUTLINE_TYPES = {
  SMALL: "SMALL",
  MIDDLE: "MIDDLE",
};

const SIZE_TYPES = {
  [BUTTON_COLOR_SIZE_TYPES.SMALL]: {
    height: 22,
    width: 36,
  },
  [BUTTON_COLOR_SIZE_TYPES.MIDDLE]: {
    height: 28,
    width: 50,
  },
};

const OUTLINE_TYPES = {
  [BUTTON_COLOR_OUTLINE_TYPES.SMALL]: {
    outline: "1px solid #525252",
  },
  [BUTTON_COLOR_OUTLINE_TYPES.MIDDLE]: {
    outline: "2px solid #525252",
  },
};
const ButtonColor: FC<ButtonColorProps> = (props) => {
  // const { width, height } = SIZE_TYPES[props.size];

  return (
    <MyButton
      // className="button-color"
      sx={{
        width: SIZE_TYPES[props.size].width,
        height: SIZE_TYPES[props.size].height,
        outline: OUTLINE_TYPES[props.outline].outline,
        padding: "1px",
        minWidth: "unset",
        borderRadius: "9999px",
        border: "1px solid white",
        overflow: "hidden",
      }}
    >
      <img className="button-color__image" src={props.url} alt="color" />
    </MyButton>
  );
};

export default ButtonColor;
