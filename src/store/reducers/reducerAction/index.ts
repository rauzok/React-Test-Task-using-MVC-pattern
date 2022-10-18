import { IActionData } from "./models";
import { UserActionsModels } from "../../actions/models";
import { getDataFromLS } from "../../../utils/localStorage";

const initialState = {
  click: null,
  value: getDataFromLS(),
}

export const reducerAction = (state = initialState, action: IActionData) => {
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

    case UserActionsModels.DEFAULT:
      return {
        click: null,
        value: state.value
      };

    default:
      return state;
  }
}
