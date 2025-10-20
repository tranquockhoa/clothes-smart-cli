import { getActiveBanner } from "@/app/api/banner.api";
import { IResponseError } from "@/app/interface/common";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getActiveBannerRequest = createAsyncThunk(
  "getAtiveBanner",
  async (_, { rejectWithValue }) => {
    try {
      const response = await getActiveBanner();
      return response;
    } catch (error) {
      return rejectWithValue(error as IResponseError);
    }
  },
);
