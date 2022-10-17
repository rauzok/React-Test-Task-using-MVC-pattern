import {IActionData, IActionSate} from "./models";
import { UserActionsModels } from "../../actions/models";
import { getDataFromLS } from "../../../utils/localStorage";

export const reducerAction = (state = {
  click: null,
  value: getDataFromLS(),
}, action: IActionData) => {
  switch (action.type) {
    case UserActionsModels.USER_UPDATE:
      return {
        click: UserActionsModels.USER_UPDATE,
        value: action.value
      };

    case UserActionsModels.USER_EDIT:
      return {
        click: UserActionsModels.USER_EDIT,
        value: action.value,
      };

    case UserActionsModels.USER_DELETE:
      return {
        click: UserActionsModels.USER_DELETE,
        value: action.value,
      };

    default:
      return state;
  }
}
