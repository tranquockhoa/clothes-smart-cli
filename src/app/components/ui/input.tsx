import { TextField, TextFieldProps } from "@mui/material";
import { FC } from "react";

const BaseInput: FC<TextFieldProps> = (props) => {
  return <TextField {...props} />;
};

const Input = Object.assign(BaseInput, TextField);

export default Input;
