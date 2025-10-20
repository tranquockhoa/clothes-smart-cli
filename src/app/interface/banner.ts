import { Status } from "../enum/common";

export interface IBannerData {
  _id: string;
  title: string;
  description: string;
  imageId: string;
  linkUrl: string;
  status: Status;
  sortOrder: number;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface IBannerDataResponse {
  status: boolean;
  code: number;
  data: IBannerData[];
  message: string;
  timestamp: string;
}
