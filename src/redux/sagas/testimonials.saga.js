import axios from "axios";
import { put, takeLatest } from "redux-saga/effects";

function* fetchTestimonials(action) {
    try {
      const response = yield axios({ method: 'GET', url: "api/testimonials" })
      console.log(response.data)
      // yield put({ type: 'LOAD_TESTIMONIALS', payload: response.data })
    } catch(error) {
      console.error(error)
    }
}

function* testimonialsSaga() {
  yield takeLatest("FETCH_TESTIMONIALS", fetchTestimonials);
}

export default testimonialsSaga;