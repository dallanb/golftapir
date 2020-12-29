import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { AuthLayout } from '@layouts';
import { routes } from './routes';
import { ComponentRoute } from './types';

function AuthAppView() {
    return (
        <AuthLayout>
            <Switch>
                {routes.map(({ path, component, exact }: ComponentRoute) => (
                    <Route
                        key={path}
                        path={path}
                        component={component}
                        exact={exact}
                    />
                ))}
            </Switch>
        </AuthLayout>
    );
}

export default AuthAppView;
