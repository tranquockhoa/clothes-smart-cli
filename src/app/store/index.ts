import { configureStore } from "@reduxjs/toolkit";
import authPopupReducer from "./auth-popup/auth-pupop.store";
import loginRecuder from "./login/login.store";
import profileReducer from "./profile/profile.store";
import bannerReducer from "./banners/banner.store";

export const store = configureStore({
  reducer: {
    authPopup: authPopupReducer,
    login: loginRecuder,
    profile: profileReducer,
    banners: bannerReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
