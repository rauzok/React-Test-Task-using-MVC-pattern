import { EMessages, IActionMessage } from "./models";

export const reducerMessage = (state = { type: null, message: null }, action: IActionMessage) => {
  switch (action.type) {
    case EMessages.SUCCESS:
      return {
        type: EMessages.SUCCESS,
        value: action.value
      }

    case EMessages.ERROR:
      return {
        type: EMessages.ERROR,
        value: action.value
      }

    case EMessages.REMOVE:
      return {
        type: null,
        value: null
      }

    default:
      return state;
  }
}
