import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

const buildUrl = window.location.href.split('?')[1].split('=')[1]
ReactDOM.render(<App buildUrl={buildUrl}/>, document.getElementById('root'));
serviceWorker.unregister();
