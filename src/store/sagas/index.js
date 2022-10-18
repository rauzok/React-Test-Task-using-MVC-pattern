import { put, takeEvery, select, call } from 'redux-saga/effects'
import { addUser, deleteUser, getUsers, updateUser } from "../../requests";
import { UsersActionTypes } from "../reducers/reducerUsers/models";
import { UserActionsModels, UsersActionsModels } from "../actions/models";
import { getSelectedUserId } from "../selectors";
import { getDataFromLS, removeDataFromLS } from "../../utils/localStorage";
import { EMessages } from "../reducers/reducerMessage/models";
import { NoticeMessage } from "../../constants/notice.constants";

function* fetchUsersWorker() {
  try {
    const { data } = yield call(getUsers);

    yield put({ type: UsersActionTypes.GET, value: data });
  } catch (e) {
    yield console.log(e);
  }
}

function* deleteUserWorker() {
  try {
    const id = yield select(getSelectedUserId);
    
    yield call(deleteUser, id);
    yield put({ type: UsersActionTypes.DELETE, id });
    yield put({ type: EMessages.SUCCESS, value: NoticeMessage.DELETED_SUCCESS });
  } catch (e) {
    yield put({ type: EMessages.ERROR, value: NoticeMessage.DELETED_ERROR });
  }
}

function* updateUserWorker() {
  try {
    const selectedUser = yield getDataFromLS();
    const { data } = yield call(updateUser, selectedUser);

    removeDataFromLS();

    yield put({ type: UsersActionTypes.UPDATE, value: [data] });
    yield put({ type: EMessages.SUCCESS, value: NoticeMessage.UPDATED_SUCCESS });
  } catch (e) {
    yield put({ type: EMessages.ERROR, value: NoticeMessage.UPDATED_ERROR });
  }
}

function* addUserWorker() {
  try {
    const { data } = yield call(addUser);

    yield put({ type: UsersActionTypes.ADD, value: [data] });
    yield put({ type: EMessages.SUCCESS, value: NoticeMessage.ADDED_SUCCESS });
  } catch (e) {
    yield put({ type: EMessages.ERROR, value: NoticeMessage.ADDED_ERROR });
  }
}

function* mySaga() {
  yield takeEvery(UsersActionsModels.USERS_LOAD, fetchUsersWorker);
  yield takeEvery(UserActionsModels.USER_UPDATE, updateUserWorker);
  yield takeEvery(UserActionsModels.USER_ADD, addUserWorker);
  yield takeEvery(UserActionsModels.USER_DELETE, deleteUserWorker);
}

export default mySaga;
