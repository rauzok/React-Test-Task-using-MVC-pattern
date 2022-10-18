import { IUserData } from "../store/models";
import { getDataFromLS, removeDataFromLS } from "./localStorage";
import { isEqual } from "lodash";

export const onSave = (user: IUserData, getDefault: Function, updateUser: Function) => {
  const userObjFromLC = getDataFromLS();
  const isEqualData = isEqual(userObjFromLC, user);

  const defaultFn = () => {
    getDefault();
    removeDataFromLS();
  }

  const updateFn = () => {
    updateUser(userObjFromLC);
  }

  if (isEqualData) {
    defaultFn();
  } else {
    updateFn();
  }
};
