import React, { useContext, useEffect } from 'react';
import { Provider } from 'react-redux';
import { MemberAppProps } from './types';
import { isEmpty as _isEmpty } from 'lodash';
import { MessageModal, MessageSpinner } from '../components';
import configStore from './store';
import MemberAppView from './MemberAppView';
import { loadState } from '../../localStorage';
import { StoreContext } from '@contexts';

const MemberApp: React.FunctionComponent<MemberAppProps> = () => {
    let { store, setStore }: any = useContext(StoreContext);
    console.log(store);
    useEffect(() => {
        if (_isEmpty(store)) {
            const preloadedState = loadState();
            store = configStore({ preloadedState });
        } else {
            // store = configStore(store)
        }
        setStore(store);
    });
    if (_isEmpty(store)) {
        return null;
    }
    return (
        <Provider store={store}>
            <MessageModal />
            <MessageSpinner />
            <MemberAppView />
        </Provider>
    );
};

export default React.memo(MemberApp);
