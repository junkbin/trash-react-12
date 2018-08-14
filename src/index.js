import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

// Styling 
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';

// Holderjs Client image place holder. 
import 'holderjs/holder.min.js';

// Local components. 
import App from './App';
import indexRefs from './day4';


// FontAwsome
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
library.add(fab, fas, far);


const RootElem = indexRefs.HelloTypes;

ReactDOM.render(<RootElem />, document.getElementById('root'));
registerServiceWorker();
