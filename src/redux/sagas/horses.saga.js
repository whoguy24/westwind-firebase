import axios from "axios";
import { put, takeLatest } from "redux-saga/effects";

function* fetchHorses(action) {
    try {
      const response = yield axios({ method: 'GET', url: "api/horses" })
      yield put({ type: 'LOAD_HORSES', payload: response.data })
    } catch(error) {
      console.error(error)
    }
}

function* horsesSaga() {
  yield takeLatest("FETCH_HORSES", fetchHorses);
}

export default horsesSaga;