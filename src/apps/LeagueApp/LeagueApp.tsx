import React from 'react';
import { Provider } from 'react-redux';
import { LeagueAppProps } from './types';
import { MessageModal } from '@components';
import configStore from './store';
import LeagueAppView from './LeagueAppView';

const LeagueApp: React.FunctionComponent<LeagueAppProps> = () => {
    const { store } = configStore();
    return (
        <Provider store={store}>
            <MessageModal />
            <LeagueAppView />
        </Provider>
    );
};

export default LeagueApp;
