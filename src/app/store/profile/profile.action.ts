import { getUsersProfile } from "@/app/api/profile.api";
import { IResponseError } from "@/app/interface/common";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getUsersProfileRequest = createAsyncThunk(
  "auth/profile",
  async (_, { rejectWithValue }) => {
    try {
      const response = await getUsersProfile();
      return response;
    } catch (error) {
      return rejectWithValue(error as IResponseError);
    }
  },
);
