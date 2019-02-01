import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import * as serviceWorker from './serviceWorker'

import { Provider } from 'react-redux'

import datastore from './redux/createStore'

// const buildUrl = window.location.href.split('?')[1].split('=')[1]
const buildUrl = 'http://localhost:8080/job/Test%20pipe/1/'
ReactDOM.render(
    <Provider store={datastore}>
        <App buildUrl={buildUrl} />
    </Provider>,
    document.getElementById('root'),
)
serviceWorker.unregister()
