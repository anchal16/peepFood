import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Router from "./components/Router";
//import serviceWorker from './serviceWorker';
import { register as serviceWorker } from './serviceWorker';

ReactDOM.render(<Router />, document.getElementById('root'));
serviceWorker();


