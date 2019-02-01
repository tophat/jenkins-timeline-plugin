import { call, put, takeEvery } from 'redux-saga/effects'
import axios from 'axios'

import {
    FETCH_WFAPI_DATA,
    fetchWfApiDataSuccess,
    fetchWfApiDataFailed,
} from './actions'

export function* wfapiBuildSaga(action) {
    const { payload } = action

    try {
        const response = yield call(axios.get, payload.endpointUrl)
        yield put(fetchWfApiDataSuccess(response.data))
    } catch (e) {
        yield put(fetchWfApiDataFailed())
    }
}

export function* wfapiBuildSagaWatcher() {
    yield takeEvery(FETCH_WFAPI_DATA, wfapiBuildSaga)
}
