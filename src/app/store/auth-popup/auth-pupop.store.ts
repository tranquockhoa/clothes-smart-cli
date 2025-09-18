import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "..";

interface authPopupState {
  currentForm: "login" | "register";
  open: boolean;
}

const initialState: authPopupState = {
  currentForm: "login",
  open: false,
};

export const authPopupSlide = createSlice({
  name: "auth-popup",
  initialState,
  reducers: {
    setCurrentForm: (state, action) => {
      state.currentForm = action.payload;
    },
    setPopupStatus: (state, action) => {
      state.open = action.payload;
    },
  },
});

export const { setCurrentForm, setPopupStatus } = authPopupSlide.actions;
export const selectCurrentForm = (state: RootState) =>
  state.authPopup.currentForm;
export const selectOpen = (state: RootState) => state.authPopup.open;

export default authPopupSlide.reducer;
