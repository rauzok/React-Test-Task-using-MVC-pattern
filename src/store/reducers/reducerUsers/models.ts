import { IUserData } from "../models";

export enum UsersActionTypes {
  GET = 'GET',
  DELETE = 'DELETE',
  UPDATE = 'UPDATE',
  ADD = 'ADD'
}

export type TUsersType = keyof typeof UsersActionTypes;

export interface IUsersAction {
  type: TUsersType;
  value: IUserData[];
  id: string;
}
