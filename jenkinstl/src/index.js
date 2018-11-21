import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

// const buildUrl = window.location.href.split('?')[1].split('=')[1]
const buildUrl = 'http://localhost:8080/job/test-pipeline/12/'
ReactDOM.render(<App buildUrl={buildUrl}/>, document.getElementById('root'));
serviceWorker.unregister();
