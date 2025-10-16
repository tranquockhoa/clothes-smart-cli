/* eslint-disable no-unused-vars */
"use client";

import { FC } from "react";
import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
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
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/app/store";
import { getUsersProfileRequest } from "@/app/store/profile/profile.action";
import { IUser } from "@/app/interface/user";

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

const UpdateProfileForm: FC<UpdateProfileFormProps> = ({ isOpen, onClose }) => {
  const dispatch = useDispatch<AppDispatch>();
  const { profile } = useSelector((state: RootState) => state.profile);
  const { control, handleSubmit } = useForm<IUser>({
    defaultValues: {
      name: profile?.data.name,
      phone: profile?.data.phone,
      gender: profile?.data.gender,
      dob: profile?.data.dob,
    },
  });
  const onSubmit: SubmitHandler<IUser> = (data) => console.log(data);
  React.useEffect(() => {
    dispatch(getUsersProfileRequest());
  }, [dispatch]);

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
            <Controller
              control={control}
              name="name"
              render={({ field }) => {
                return (
                  <FormControl fullWidth sx={{ m: 1 }}>
                    <InputLabel htmlFor="full-name">Họ và tên</InputLabel>
                    <OutlinedInput
                      {...field}
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
                );
              }}
            />

            <Controller
              control={control}
              name="gender"
              render={({ field }) => {
                return (
                  <FormControl className="update-profile__dialog-content__gender">
                    <RadioGroup
                      {...field}
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
                );
              }}
            />

            <Controller
              control={control}
              name="dob"
              render={({ field }) => {
                return <BasicDatePicker {...field} />;
              }}
            />
            <Controller
              control={control}
              name="phone"
              render={({ field }) => {
                return (
                  <FormControl fullWidth sx={{ m: 1 }}>
                    <InputLabel htmlFor="phonenumber">Số điện thoại</InputLabel>
                    <OutlinedInput
                      {...field}
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
                );
              }}
            />

            {/* <MySlider name="Chiều cao" unit="cm" type={SLIDER_TYPES.HEIGHT} />
            <MySlider name="Cân nặng" unit="kg" type={SLIDER_TYPES.WEIGHT} /> */}
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
