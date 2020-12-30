import React from 'react';
import { Provider } from 'react-redux';
import { LeagueAppProps } from './types';
import { MessageModal } from '@components';
import { store } from './store';
import LeagueAppView from './LeagueAppView';

class LeagueApp extends React.Component<LeagueAppProps> {
    render() {
        return (
            <Provider store={store}>
                <MessageModal />
                <LeagueAppView />
            </Provider>
        );
    }
}

export default LeagueApp;
