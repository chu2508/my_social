import { getCurrentUser } from "@src/services/auth";
import IUserProfile from "@src/types/IUserProfile";
import { call, put, takeLeading } from "redux-saga/effects";
import { actionTypes } from "../actions";
import { setUserProfileAction } from "../actions/application";

function* appInitSage() {
  const userProfile: IUserProfile = yield call(getCurrentUser);
  yield put(setUserProfileAction(userProfile));
}

export function* watchAppInit() {
  yield takeLeading(actionTypes.application.APP_INIT, appInitSage);
}
