import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import AuthAppView from '@apps/AuthApp/AuthAppView';

function AuthApp() {
    return (
        <Provider store={store}>
            <AuthAppView />
        </Provider>
    );
}

export default AuthApp;
