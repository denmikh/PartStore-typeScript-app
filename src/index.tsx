import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './index.css';
import { App } from './App';
import registerServiceWorker from '../common/registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
