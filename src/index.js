import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

import './index.css';
import 'bootstrap/dist/css/bootstrap.css';

import App from './App';
import indexRefs from './components';

const RootElem = indexRefs.MainBootstrapHolder;

ReactDOM.render(<RootElem />, document.getElementById('root'));
registerServiceWorker();
