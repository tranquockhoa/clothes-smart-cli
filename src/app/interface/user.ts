import { Gender, Role, Status } from "../enum/common";

export interface IUser {
  _id: string;
  name: string;
  email: string;
  password: string;
  phone: string;
  address: string[];
  dob: string;
  gender: Gender;
  role: Role;
  status: Status;
  accountType: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface IUserData {
  user: IUserData;
  accessToken: string;
  refreshToken: string;
  crsToken: string;
}

export interface IProfileUserResponse {
  status: boolean;
  code: number;
  data: IUser;
  message: string;
  timestamp: string;
}
