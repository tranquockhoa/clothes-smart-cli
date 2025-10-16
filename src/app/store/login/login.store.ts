import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "..";

interface loginState {
  status: boolean | null;
}

const initialState: loginState = {
  status: null,
};

export const loginSlice = createSlice({
  name: "loginState",
  initialState,
  reducers: {
    setLoginState: (state, action: PayloadAction<boolean>) => {
      state.status = action.payload;
    },
  },
});

export const { setLoginState } = loginSlice.actions;

export const selectStatus = (state: RootState) => state.login.status;

export default loginSlice.reducer;
