import { IUserData } from "./user";

export interface ILoginRespond {
  status: boolean;
  code: number;
  data: IUserData;
  message: string;
  timestamp: string;
}

export interface ILoginParams {
  email: string;
  password: string;
}
