import React from 'react';
import ReactDOM from 'react-dom';
import { App } from '@apps';
import { FirebaseClient } from '@libs';
import * as serviceWorker from './serviceWorker';

import './index.scss';
import 'antd/dist/antd.css';

FirebaseClient.init();
ReactDOM.render(<App />, document.getElementById('root'));

// If you want your Routes to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
