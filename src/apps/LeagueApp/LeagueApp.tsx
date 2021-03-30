import React, { useContext, useEffect } from 'react';
import { Provider } from 'react-redux';
import { isEmpty as _isEmpty } from 'lodash';
import { LeagueAppProps } from './types';
import configStore from './store';
import LeagueAppView from './LeagueAppView';
import { loadState } from '../../localStorage';
import { MessageModal, MessageSpinner } from '@apps/components';
import { StoreContext } from '@contexts';

const LeagueApp: React.FunctionComponent<LeagueAppProps> = () => {
    let { store, setStore }: any = useContext(StoreContext);
    console.log(store);
    useEffect(() => {
        if (_isEmpty(store)) {
            const preloadedState = loadState();
            store = configStore({ preloadedState });
            setStore(store);
        }
    });
    if (_isEmpty(store)) {
        return null;
    }
    return (
        <Provider store={store}>
            <MessageModal />
            <MessageSpinner />
            <LeagueAppView />
        </Provider>
    );
};

export default React.memo(LeagueApp);
