import React from 'react';
import { Route, Switch } from 'react-router-dom';
import loginRoutes from './loginRoutes';
import registerRoutes from './registerRoutes';
import { AuthLayout } from '../../layouts';

function Auth(url: string) {
    return (
        <AuthLayout>
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
                            path={`${url}${path}`}
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
                            path={`${url}${path}`}
                            component={component}
                            exact={exact}
                        />
                    )
                )}
            </Switch>
        </AuthLayout>
    );
}

export default Auth;
