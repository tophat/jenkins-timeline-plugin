import { applyNamespace } from '../util'

export const sliceName = 'wfapiData'

export const FETCH_WFAPI_DATA = applyNamespace(sliceName, 'fetchWfApiData')
export const FETCH_WFAPI_DATA_SUCCESS = applyNamespace(
    sliceName,
    'fetchWfApiDataSuccess',
)
export const FETCH_WFAPI_DATA_FAILED = applyNamespace(
    sliceName,
    'fetchWfApiDataFailed',
)

export const fetchWfApiData = endpointUrl => ({
    payload: { endpointUrl },
    type: FETCH_WFAPI_DATA,
})

export const fetchWfApiDataSuccess = responseData => ({
    payload: { responseData },
    type: FETCH_WFAPI_DATA_SUCCESS,
})

export const fetchWfApiDataFailed = () => ({
    type: FETCH_WFAPI_DATA_FAILED,
})
