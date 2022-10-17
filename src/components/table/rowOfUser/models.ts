import { IUserData } from "../../../store/models";
import { IActionSate } from "../../../store/reducers/reducerAction/models";

export interface IRowOfUserProps extends IUserData {
  deleteUser: Function;
  updateUser: Function;
  editUser: Function;
  action: IActionSate
}