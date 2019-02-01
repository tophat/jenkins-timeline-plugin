import { createStore, applyMiddleware, compose } from 'redux'

import rootReducer from './rootReducer'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(rootReducer, {}, composeEnhancers(
    applyMiddleware(),
))

export default store
