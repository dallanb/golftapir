import React from 'react';
import { Route, Switch } from 'react-router-dom';
import loginRoutes from './loginRoutes';
import registerRoutes from './registerRoutes';
import { AuthLayout } from '@layouts';
import { ComponentRoute } from '../types';

function Auth({ url }: { url: string }) {
    return (
        <AuthLayout>
            <Switch>
                {loginRoutes.map(
                    ({ path, component, exact }: ComponentRoute) => (
                        <Route
                            key={path}
                            path={`${url}${path}`}
                            component={component}
                            exact={exact}
                        />
                    )
                )}
                {registerRoutes.map(
                    ({ path, component, exact }: ComponentRoute) => (
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
