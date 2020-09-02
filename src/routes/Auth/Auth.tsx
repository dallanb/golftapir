import React from 'react';
import { Route, Switch } from 'react-router-dom';
import loginRoutes from './loginRoutes';
import registerRoutes from './registerRoutes';

function Auth() {
    return (
        <Switch>
            {loginRoutes.map(
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
            {registerRoutes.map(
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
    );
}

export default Auth;
