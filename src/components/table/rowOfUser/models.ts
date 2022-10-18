import { IUserData } from "../../../store/models";
import { IActionSate } from "../../../store/reducers/reducerAction/models";

export interface IRowOfUserProps {
  user: IUserData;
  deleteUser: Function;
  updateUser: Function;
  editUser: Function;
  getDefault: Function;
  action: IActionSate
}