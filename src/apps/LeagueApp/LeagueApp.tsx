import React from 'react';
import { Provider } from 'react-redux';
import { LeagueAppProps } from './types';
import { MessageModal } from '@components';
import { store } from './store';
import LeagueAppView from './LeagueAppView';

class LeagueApp extends React.Component<LeagueAppProps> {
    render() {
        const { url } = this.props;
        return (
            <Provider store={store}>
                <MessageModal />
                <LeagueAppView url={url} />
            </Provider>
        );
    }
}

export default LeagueApp;
