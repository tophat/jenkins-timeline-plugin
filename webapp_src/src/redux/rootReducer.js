import { combineReducers } from 'redux-immutable'

import wfapiReducer from './wfapi/reducer'
import { sliceName as wfapiSlice } from './wfapi/actions'
import Immutable from 'immutable'

const rootReducer = combineReducers(
    {
        [wfapiSlice]: wfapiReducer,
    },
    new Immutable.Map(),
)

export default rootReducer
