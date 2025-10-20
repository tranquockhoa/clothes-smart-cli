import { createSlice } from "@reduxjs/toolkit";
import { IProfileUserResponse } from "@/app/interface/user";
import { getUsersProfileRequest } from "./profile.action";

interface ProfileState {
  profile: IProfileUserResponse | null;
  loading: boolean;
  error: string;
}

const initialState: ProfileState = {
  profile: null,
  loading: false,
  error: "",
};

export const profileSlice = createSlice({
  name: "authProfile",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUsersProfileRequest.pending, (state) => {
        state.loading = true;
        state.error = "";
      })
      .addCase(getUsersProfileRequest.fulfilled, (state, action) => {
        state.loading = false;
        state.error = "";
        state.profile = action.payload;
      })
      .addCase(getUsersProfileRequest.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const profileAction = profileSlice.actions;

export default profileSlice.reducer;
