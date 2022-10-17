import { IUsersAction, UsersActionTypes } from "./models";
import { IUserData } from "../models";

export const reducerUsers = (state = ([] as IUserData[]), action: IUsersAction) => {
  switch (action.type) {
    case UsersActionTypes.GET:
      return [...action.value];

    case UsersActionTypes.DELETE:
      const newState = state.filter(({ id }) => action.id !== id);

      return [...newState];

    case UsersActionTypes.UPDATE:
      const updatedState = state.map((user) => action.value[0].id === user.id ? action.value[0] : user);

      return [...updatedState];

    case UsersActionTypes.ADD:
      return [...state, action.value[0]];

    default:
      return state;
  }
}
