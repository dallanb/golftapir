import React from 'react';
import { Provider } from 'react-redux';
import { MemberAppProps } from './types';
import { MessageModal } from '@components';
import configStore from './store';
import MemberAppView from './MemberAppView';
import { loadState } from '../../localStorage';

const MemberApp: React.FunctionComponent<MemberAppProps> = () => {
    const preloadedState = loadState(['base']);
    const { store } = configStore({ preloadedState });
    return (
        <Provider store={store}>
            <MessageModal />
            <MemberAppView />
        </Provider>
    );
};

export default MemberApp;
