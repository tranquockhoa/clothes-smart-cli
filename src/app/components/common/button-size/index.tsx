import { FC } from "react";
import "./button-size.scss";
import Button, { ButtonProps } from "@mui/material/Button";

interface ButtonSizesProps extends ButtonProps {
  customSize: string;
  sizeName: string;
}
export const BUTTON_SIZES_SIZE_TYPES = {
  SMALL: "SMALL",
  MIDDLE: "MIDDLE",
};
const SIZE_TYPES = {
  [BUTTON_SIZES_SIZE_TYPES.SMALL]: { width: 48, height: 36 },
  [BUTTON_SIZES_SIZE_TYPES.MIDDLE]: { width: 70, height: 44 },
};
const ButtonSize: FC<ButtonSizesProps> = (props) => {
  return (
    <Button
      sx={{
        minWidth: SIZE_TYPES[props.customSize].width,
        height: SIZE_TYPES[props.customSize].height,
      }}
      {...props}
    >
      {props.sizeName}
    </Button>
  );
};

export default ButtonSize;
