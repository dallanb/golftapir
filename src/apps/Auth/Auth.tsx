import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { AuthLayout } from '@layouts';
import { routes } from './routes';
import { ComponentRoute } from './types';

function Auth({ url }: { url: string }) {
    return (
        <AuthLayout>
            <Switch>
                {routes.map(({ path, component, exact }: ComponentRoute) => (
                    <Route
                        key={path}
                        path={`${url}${path}`}
                        component={component}
                        exact={exact}
                    />
                ))}
            </Switch>
        </AuthLayout>
    );
}

export default Auth;
