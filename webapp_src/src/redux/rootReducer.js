import { combineReducers } from 'redux'

import wfapiReducer from './wfapi/reducer'
import { sliceName as wfapiSlice } from './wfapi/actions'

const rootReducer = combineReducers({
    [wfapiSlice]: wfapiReducer,
})

export default rootReducer
