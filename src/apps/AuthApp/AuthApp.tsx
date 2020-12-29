import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import AuthAppView from '@apps/AuthApp/AuthAppView';

function AuthApp({ url }: { url: string }) {
    return (
        <Provider store={store}>
            <AuthAppView url={url} />
        </Provider>
    );
}

export default AuthApp;
