"use client";

import { FC } from "react";
import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { useForm, SubmitHandler } from "react-hook-form";
import "./update-form.scss";
import PersonIcon from "@mui/icons-material/Person";
import PhoneIcon from "@mui/icons-material/Phone";
import MySlider from "../_components/slider";
import { SLIDER_TYPES } from "../_components/slider";
import BasicDatePicker from "../_components/date-picker";

import {
  FormControl,
  FormControlLabel,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Radio,
  RadioGroup,
} from "@mui/material";

interface UpdateProfileFormProps {
  isOpen: boolean;
  onClose: () => void;
  onClickOpen: () => void;
}

enum GenderEnum {
  female = "nam",
  male = "nữ",
  other = "khác",
}

type Inputs = {
  name: string;
  phone: number;
  gender: GenderEnum;
  dateOfBirth: Date;
  height: number;
  weight: number;
  email: string;
  password: string;
};

interface IFormInput {
  firstName: string;
  gender: GenderEnum;
}

const UpdateProfileForm: FC<UpdateProfileFormProps> = ({ isOpen, onClose }) => {
  const { handleSubmit } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);
  return (
    <React.Fragment>
      <Dialog open={isOpen} onClose={onClose} className="update-profile">
        <DialogTitle>
          <h2>Chỉnh sửa thông tin tài khoản</h2>
        </DialogTitle>
        <DialogContent className="update-profile__dialog-content">
          <form
            className="update-profile__dialog-content__form"
            onSubmit={handleSubmit(onSubmit)}
          >
            <FormControl fullWidth sx={{ m: 1 }}>
              <InputLabel htmlFor="full-name">Họ và tên</InputLabel>
              <OutlinedInput
                id="full-name"
                label="Họ và tên"
                sx={{
                  "& fieldset": {
                    borderRadius: "9999px",
                  },
                }}
                startAdornment={
                  <InputAdornment position="start">
                    <PersonIcon />
                  </InputAdornment>
                }
              />
            </FormControl>

            <FormControl className="update-profile__dialog-content__gender">
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="female"
                name="radio-buttons-group"
                sx={{ display: "flex", flexDirection: "row" }}
              >
                <FormControlLabel
                  value={GenderEnum.female}
                  control={<Radio />}
                  label={GenderEnum.female}
                />
                <FormControlLabel
                  value={GenderEnum.male}
                  control={<Radio />}
                  label={GenderEnum.male}
                />
                <FormControlLabel
                  value={GenderEnum.other}
                  control={<Radio />}
                  label={GenderEnum.other}
                />
              </RadioGroup>
            </FormControl>

            <BasicDatePicker />

            <FormControl fullWidth sx={{ m: 1 }}>
              <InputLabel htmlFor="phonenumber">Số điện thoại</InputLabel>
              <OutlinedInput
                id="phonenumber"
                label="Số điện thoại"
                sx={{
                  "& fieldset": {
                    borderRadius: "9999px",
                  },
                }}
                startAdornment={
                  <InputAdornment position="start">
                    <PhoneIcon />
                  </InputAdornment>
                }
              />
            </FormControl>

            <MySlider name="Chiều cao" unit="cm" type={SLIDER_TYPES.HEIGHT} />
            <MySlider name="Cân nặng" unit="kg" type={SLIDER_TYPES.WEIGHT} />
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose}>Cancel</Button>
          <Button type="submit" form="subscription-form">
            Subscribe
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
};

export default UpdateProfileForm;
