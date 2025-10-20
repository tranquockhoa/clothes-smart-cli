import { FC } from "react";
import "./button-size.scss";
import Button, { ButtonProps } from "@mui/material/Button";

interface ButtonSizesProps extends ButtonProps {
  customSize: string;
  sizeName: string;
  customBackgroundColor: string;
}
export const BUTTON_SIZES_SIZE_TYPES = {
  SMALL: "SMALL",
  MIDDLE: "MIDDLE",
  FILTER: "FILTER",
};

export const BUTTON_SIZES_COLOR_TYPES = {
  PRIMARY: "PRIMARY",
  SECONDARY: "SECONDARY",
  SELECTED: "SELECTED",
};

const SIZE_TYPES = {
  [BUTTON_SIZES_SIZE_TYPES.SMALL]: { width: 48, height: 36 },
  [BUTTON_SIZES_SIZE_TYPES.MIDDLE]: { width: 70, height: 44 },
  [BUTTON_SIZES_SIZE_TYPES.FILTER]: { width: 56, height: 36 },
};

const COLOR_TYPES = {
  [BUTTON_SIZES_COLOR_TYPES.PRIMARY]: {
    backgroundColor: "#D1D1D1",
    color: "#525252",
  },

  [BUTTON_SIZES_COLOR_TYPES.SELECTED]: {
    backgroundColor: "#000000",
    color: "#ffffff",
  },
};
const ButtonSize: FC<ButtonSizesProps> = (props) => {
  return (
    <Button
      sx={{
        minWidth: SIZE_TYPES[props.customSize].width,
        height: SIZE_TYPES[props.customSize].height,
        backgroundColor:
          COLOR_TYPES[props.customBackgroundColor].backgroundColor,
        color: COLOR_TYPES[props.customBackgroundColor].color,
        borderRadius: 3,
      }}
      {...props}
    >
      {props.sizeName}
    </Button>
  );
};

export default ButtonSize;
