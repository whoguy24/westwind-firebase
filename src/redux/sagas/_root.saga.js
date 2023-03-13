import { all } from "redux-saga/effects";
import testimonialsSaga from "./testimonials.saga";

export default function* rootSaga() {
  yield all([
    testimonialsSaga()
  ]);
}