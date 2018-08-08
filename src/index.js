import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

// Styling 
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';

// Holderjs Client image place holder. 
import 'holderjs/holder.min.js';

// FontAwsome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'
// library.add(fab, faCheckSquare, faCoffee)

// Local components. 
import App from './App';
import indexRefs from './day1';

const RootElem = indexRefs.MainBootstrapHolder;

ReactDOM.render(<RootElem />, document.getElementById('root'));
registerServiceWorker();
