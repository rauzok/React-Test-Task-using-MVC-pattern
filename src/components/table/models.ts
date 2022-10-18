import { IUserData } from "../../store/models";
import { IActionMessage } from "../../store/reducers/reducerMessage/models";
import { IActionSate } from "../../store/reducers/reducerAction/models";

export interface ITableViewProps {
  loadUsers: Function;
  addUser: Function;
  deleteUser: Function;
  updateUser: Function;
  editUser: Function;
  getDefault: Function;
  users: IUserData[];
  message: IActionMessage;
  action: IActionSate;
}

export interface IStoreState {
  users: IUserData[];
  message: IActionMessage;
  action: IActionSate;
}
