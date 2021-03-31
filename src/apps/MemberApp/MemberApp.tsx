import React from 'react';
import { Provider } from 'react-redux';
import { MemberAppProps } from './types';
import { MessageModal, MessageSpinner } from '../components';
import configStore from './store';
import MemberAppView from './MemberAppView';
import { loadState } from '../../localStorage';

const MemberApp: React.FunctionComponent<MemberAppProps> = () => {
    const preloadedState = loadState();
    const store = configStore({ preloadedState });
    return (
        <Provider store={store}>
            <MessageModal />
            <MessageSpinner />
            <MemberAppView />
        </Provider>
    );
};

export default React.memo(MemberApp);
