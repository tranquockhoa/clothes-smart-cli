import { AxiosResponse } from "axios";
import { ILoginParams, ILoginRespond } from "../interface/auth";
import { AUTH_LOGIN } from "./endpoint";
import authorizedRequest from "../config/axios";

export const loginApi = async (param: ILoginParams) => {
  const response: AxiosResponse<ILoginRespond> =
    await authorizedRequest.post<ILoginRespond>(AUTH_LOGIN, param);
  return response.data;
};
