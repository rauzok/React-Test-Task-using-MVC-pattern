import { UserActionsModels, UsersActionsModels } from "./models";
import { IUserData } from "../models";

export const loadUsers = () => ({ type: UsersActionsModels.USERS_LOAD });

export const addUser = () => ({ type: UserActionsModels.USER_ADD });

export const deleteUser = (value: IUserData) => ({ type: UserActionsModels.USER_DELETE, value });

export const editUser = (value: IUserData) => ({ type: UserActionsModels.USER_EDIT, value });

export const updateUser = (value: IUserData) => ({ type: UserActionsModels.USER_UPDATE, value });
