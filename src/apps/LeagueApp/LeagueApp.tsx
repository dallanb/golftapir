import React from 'react';
import { Provider } from 'react-redux';
import { LeagueAppProps } from './types';
import { MessageModal } from '@components';
import configStore from './store';
import LeagueAppView from './LeagueAppView';
import { loadState } from '../../localStorage';

const LeagueApp: React.FunctionComponent<LeagueAppProps> = () => {
    const preloadedState = loadState(['auth', 'base', 'notification']);
    const { store } = configStore({ preloadedState });
    return (
        <Provider store={store}>
            <MessageModal />
            <LeagueAppView />
        </Provider>
    );
};

export default LeagueApp;
