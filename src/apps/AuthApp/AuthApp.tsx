import React from 'react';
import { Provider } from 'react-redux';
import AuthAppView from '@apps/AuthApp/AuthAppView';
import { loadState } from '../../localStorage';
import configStore from './store';

const AuthApp: React.FunctionComponent = () => {
    const preloadedState = loadState(['base']);
    const { store } = configStore({ preloadedState });
    return (
        <Provider store={store}>
            <AuthAppView />
        </Provider>
    );
};

export default AuthApp;
