import {
    FETCH_WFAPI_DATA,
    FETCH_WFAPI_DATA_FAILED,
    FETCH_WFAPI_DATA_SUCCESS,
} from './actions'

export const initialState = {
    isLoading: false,
    hasErrored: false,
    buildData: null,
}

const fetchWfApiDataHandler = state => {
    const newState = Object.assign({}, state)
    newState.isLoading = true

    return newState
}

const fetchWfApiDataSuccessHandler = (state, payload) => {
    const newState = Object.assign({}, state)
    newState.isLoading = false
    newState.buildData = payload

    return newState
}

const fetchWfApiDataFailedHandler = state => {
    const newState = Object.assign({}, state)
    newState.isLoading = false
    newState.hasErrored = true

    return newState
}

export default (state = initialState, action) => {
    const { payload, type } = action

    switch (type) {
        case FETCH_WFAPI_DATA:
            return fetchWfApiDataHandler(state)
        case FETCH_WFAPI_DATA_SUCCESS:
            return fetchWfApiDataSuccessHandler(state, payload)
        case FETCH_WFAPI_DATA_FAILED:
            return fetchWfApiDataFailedHandler(state)
        default:
            return state
    }
}
