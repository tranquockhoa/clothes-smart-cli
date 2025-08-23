import { TextField, TextFieldProps } from "@mui/material";
import { FC } from "react";

const BaseTextField: FC<TextFieldProps> = (props) => {
  return <TextField {...props} />;
};

const MyTextField = Object.assign(TextField, BaseTextField);

export default MyTextField;
