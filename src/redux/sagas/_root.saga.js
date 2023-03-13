import { all } from "redux-saga/effects";
import testimonialsSaga from "./testimonials.saga";
import horsesSaga from "./horses.saga";

export default function* rootSaga() {
  yield all([
    testimonialsSaga(),
    horsesSaga()
  ]);
}