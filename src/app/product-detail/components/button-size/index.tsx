import MyButton from "@/app/components/ui/button";
import { FC } from "react";

interface ButtonSizeProps {
  size: string;
}

const ButtonSize: FC<ButtonSizeProps> = (props) => {
  return <MyButton>{props.size}</MyButton>;
};

export default ButtonSize;
