import React from 'react';
import { Provider } from 'react-redux';
import AuthAppView from '@apps/AuthApp/AuthAppView';
import { loadState } from '../../localStorage';
import configStore from './store';
import { MessageModal, MessageSpinner } from '@containers';

const AuthApp: React.FunctionComponent = () => {
    const preloadedState = loadState();
    const store = configStore({ preloadedState });
    return (
        <Provider store={store}>
            <MessageModal />
            <MessageSpinner />
            <AuthAppView />
        </Provider>
    );
};

export default React.memo(AuthApp);
