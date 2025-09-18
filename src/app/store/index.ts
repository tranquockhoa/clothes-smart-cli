import { configureStore } from "@reduxjs/toolkit";
import authPopupReducer from "./auth-popup/auth-pupop.store";

export const store = configureStore({
  reducer: {
    authPopup: authPopupReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
