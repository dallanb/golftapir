import React, { Fragment } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

// routes
import AuthRoutes from './AuthRoutes';
// components
import MessageModal from '../components/MessageModal';

export const Routes = (
    <Fragment>
        <MessageModal />
        <Switch>
            {AuthRoutes.map(
                ({
                    path,
                    component,
                    exact,
                }: {
                    path: string;
                    component: any;
                    exact?: boolean;
                }) => (
                    <Route
                        key={path}
                        path={path}
                        component={component}
                        exact={exact}
                    />
                )
            )}
        </Switch>
    </Fragment>
);
