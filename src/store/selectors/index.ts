import { IStoreState } from "../../components/table/models";

export const getSelectedUserId = (state: IStoreState) => state.action.value.id;

export const getSelectedUserData = (state: IStoreState) => state.action.value;

export const getMessage = (state: IStoreState) => state.message;
