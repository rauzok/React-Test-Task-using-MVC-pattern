import { IActionSate } from "../store/reducers/reducerAction/models";
import { UserActionsModels } from "../store/actions/models";
import { IUserData } from "../store/models";

export const checkRow = (action: IActionSate, id: string, type: string) =>
  (action.click === type && id === action.value.id);

export const clickTypeCondition = (action: IActionSate, user: IUserData) =>
  checkRow(action, user.id, UserActionsModels.USER_EDIT) || localStorage.getItem('id') === user.id;

export const disabledDeleteButton = (action: IActionSate, user: IUserData) =>
  checkRow(action, user.id, UserActionsModels.USER_DELETE);
