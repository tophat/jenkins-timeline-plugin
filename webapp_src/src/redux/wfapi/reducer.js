import Immutable from 'immutable'

import {
    FETCH_WFAPI_DATA,
    FETCH_WFAPI_DATA_FAILED,
    FETCH_WFAPI_DATA_SUCCESS,
} from './actions'

export const initialState = Immutable.fromJS({
    isLoading: false,
    hasErrored: false,
    buildData: null,
})

const fetchWfApiDataHandler = state => {
    return state.merge({
        isLoading: true,
    })
}

const fetchWfApiDataSuccessHandler = (state, payload) => {
    return state.merge({
        isLoading: false,
        buildData: payload,
    })
}

const fetchWfApiDataFailedHandler = state => {
    return state.merge({
        isLoading: false,
        hasErrored: true,
    })
}

export default (state = initialState, action) => {
    const { payload, type } = action

    console.log(state)

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
