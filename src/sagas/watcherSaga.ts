import { takeLatest } from "redux-saga/effects";
import workerSaga from "./wokerSaga";

export function* watcherSaga() {
    yield takeLatest("API_CALL_REQUEST", workerSaga);
  }
  