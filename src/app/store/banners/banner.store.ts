import { IBannerDataResponse } from "@/app/interface/banner";
import { createSlice } from "@reduxjs/toolkit";
import { getActiveBannerRequest } from "./banner.action";

interface BannerState {
  banners: IBannerDataResponse | null;
  loading: boolean;
  error: string;
}

const initialState: BannerState = {
  banners: null,
  loading: false,
  error: "",
};

export const bannersSlice = createSlice({
  name: "bannersSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getActiveBannerRequest.pending, (state) => {
        state.loading = true;
        state.error = "";
      })
      .addCase(getActiveBannerRequest.fulfilled, (state, action) => {
        state.loading = false;
        state.error = "";
        state.banners = action.payload;
      })
      .addCase(getActiveBannerRequest.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const bannerAction = bannersSlice.actions;

export default bannersSlice.reducer;
