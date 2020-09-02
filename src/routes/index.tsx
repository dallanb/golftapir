import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';

// apps
import Auth from './Auth';
import MemberApp from './MemberApp';
// components
import MessageModal from '../components/MessageModal';

export const Routes = (
    <Fragment>
        <MessageModal />
        <Switch>
            <Route path="/auth" render={({ match: { url } }) => Auth(url)} />
            <Route
                path="/app"

                render={({ match: { url } }) => MemberApp(url)}
            />
        </Switch>
    </Fragment>
);
