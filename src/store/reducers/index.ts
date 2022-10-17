import { combineReducers } from "@reduxjs/toolkit";

import { reducerUsers } from "./reducerUsers";
import { reducerAction } from "./reducerAction";
import { reducerMessage } from "./reducerMessage";

const reducer = combineReducers({
  action: reducerAction,
  users: reducerUsers,
  message: reducerMessage
})

export default reducer;
