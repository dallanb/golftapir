import React from 'react';
import { Provider } from 'react-redux';
import { LeagueAppProps } from './types';
import configStore from './store';
import LeagueAppView from './LeagueAppView';
import { loadState } from '../../localStorage';
import { MessageModal, MessageSpinner } from '@apps/components';

const LeagueApp: React.FunctionComponent<LeagueAppProps> = () => {
    const preloadedState = loadState();
    const { store } = configStore({ preloadedState });
    return (
        <Provider store={store}>
            <MessageModal />
            <MessageSpinner />
            <LeagueAppView />
        </Provider>
    );
};

export default React.memo(LeagueApp);
