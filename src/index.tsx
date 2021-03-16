import React from 'react';
import ReactDOM from 'react-dom';
import { App } from '@apps';
import { FirebaseClient } from '@libs';
import * as serviceWorker from './serviceWorker';

import './index.less';
import 'antd/dist/antd.less';

FirebaseClient.init();

const spinner = document.getElementById('spinner');

if (spinner && !spinner.hasAttribute('hidden')) {
    spinner.setAttribute('hidden', 'true');
}
ReactDOM.render(<App />, document.getElementById('root'));

// If you want your Routes to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
