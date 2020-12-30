import React from 'react';
import { Provider } from 'react-redux';
import { MemberAppProps } from './types';
import { MessageModal } from '@components';
import { store } from './store';
import MemberAppView from './MemberAppView';

class MemberApp extends React.Component<MemberAppProps> {
    render() {
        return (
            <Provider store={store}>
                <MessageModal />
                <MemberAppView />
            </Provider>
        );
    }
}

export default MemberApp;
