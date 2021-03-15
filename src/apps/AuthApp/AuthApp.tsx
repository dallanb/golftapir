import React from 'react';
import { Provider } from 'react-redux';
import AuthAppView from '@apps/AuthApp/AuthAppView';
import { loadState } from '../../localStorage';
import configStore from './store';
import { MessageModal } from '@components';

const AuthApp: React.FunctionComponent = () => {
    const preloadedState = loadState();
    const { store } = configStore({ preloadedState });
    return (
        <Provider store={store}>
            <MessageModal />
            <AuthAppView />
        </Provider>
    );
};

export default React.memo(AuthApp);
