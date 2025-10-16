import { AxiosResponse } from "axios";
import { IProfileUserResponse } from "../interface/user";
import authorizedRequest from "../config/axios";
import { AUTH_PROFILE } from "./endpoint";

export const getUsersProfile = async () => {
  const response: AxiosResponse<IProfileUserResponse> =
    await authorizedRequest.get<IProfileUserResponse>(AUTH_PROFILE);
  return response.data;
};
