import {
    FETCH_WFAPI_DATA,
    FETCH_WFAPI_DATA_FAILED,
    FETCH_WFAPI_DATA_SUCCESS,
} from './actions'

export default (state = {}, action) => {
    const { payload, type } = action

    switch (type) {
        case FETCH_WFAPI_DATA:
            return state
        case FETCH_WFAPI_DATA_SUCCESS:
            return state
        case FETCH_WFAPI_DATA_FAILED:
            return state
        default:
            return state
    }
}
