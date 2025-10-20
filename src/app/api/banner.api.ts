import { AxiosResponse } from "axios";
import { IBannerDataResponse } from "../interface/banner";
import authorizedRequest from "../config/axios";
import { BANNERS } from "./endpoint";

export const getActiveBanner = async () => {
  const response: AxiosResponse<IBannerDataResponse> =
    await authorizedRequest.get<IBannerDataResponse>(BANNERS);
  return response.data;
};
