import { ButtonProps } from "@mui/material";
import Button from "@mui/material/Button";
import { FC } from "react";

interface BaseButtonProps extends ButtonProps {}

const BaseButton: FC<BaseButtonProps> = (props) => {
  return <Button {...props} />;
};

const MyButton = Object.assign(Button, BaseButton);

export default MyButton;
