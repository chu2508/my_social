import { all } from "redux-saga/effects";
import { watchAppInit } from "./init";


export default function* rootSaga() {
  yield all([watchAppInit()]);
}
