"use client";
import { FC } from "react";
import UpdateProfileForm from "../../form";
import MyButton from "@/app/components/ui/button";
import React from "react";

const PopupEditProfile: FC = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    console.log("handle open");
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      {" "}
      <MyButton
        sx={{
          marginTop: "24px",
          padding: "14px 40px",
          border: "1px solid black",
          borderRadius: 9999,
          color: "black",
          "&:hover": {
            backgroundColor: "black",
            color: "#fff",
          },
        }}
        className="profile__btn profile__btn--update"
        onClick={handleClickOpen}
      >
        Cập nhật
      </MyButton>
      <UpdateProfileForm
        isOpen={open}
        onClickOpen={handleClickOpen}
        onClose={handleClose}
      />
    </div>
  );
};

export default PopupEditProfile;
