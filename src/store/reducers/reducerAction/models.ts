import { IUserData } from "../models";

export interface IActionData {
  type: string;
  value: IUserData;
}

export interface IActionSate {
  click: string | null;
  value: IUserData;
}
