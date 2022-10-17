import {
  put,
  takeEvery,
  select,
  call,
  fork
} from 'redux-saga/effects'
import { addUser, deleteUser, getUsers, updateUser } from "../../requests";
import { UsersActionTypes } from "../reducers/reducerUsers/models";
import { UserActionsModels, UsersActionsModels } from "../actions/models";
import { getSelectedUserId } from "../selectors";
import { getDataFromLS, removeDataFromLS } from "../../utils/localStorage";
import { EMessages } from "../reducers/reducerMessage/models";

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
    yield put({ type: EMessages.SUCCESS, value: 'User successfully has been deleted!' });
  } catch (e) {
    yield put({ type: EMessages.ERROR, value: 'User has not been deleted!  Try again!' });
  }
}

function* updateUserWorker() {
  try {
    const selectedUser = yield getDataFromLS();
    const { data } = yield call(updateUser, selectedUser);

    removeDataFromLS();

    yield put({ type: UsersActionTypes.UPDATE, value: [data] });
    yield put({ type: EMessages.SUCCESS, value: 'User data successfully has been changed!' });
  } catch (e) {
    yield put({ type: EMessages.ERROR, value: 'User has not been changed! Try again!' });
  }
}

function* addUserWorker() {
  try {
    const { data } = yield call(addUser);

    yield put({ type: UsersActionTypes.ADD, value: [data] });
    yield put({ type: EMessages.SUCCESS, value: 'New user successfully has been added!' });
  } catch (e) {
    yield put({ type: EMessages.ERROR, value: 'New user has not been added! Try again!' });
  }
}

function* mySaga() {
  yield takeEvery(UsersActionsModels.USERS_LOAD, fetchUsersWorker);
  yield takeEvery(UserActionsModels.USER_UPDATE, updateUserWorker);
  yield takeEvery(UserActionsModels.USER_ADD, addUserWorker);
  yield takeEvery(UserActionsModels.USER_DELETE, deleteUserWorker);
}

export default mySaga;
