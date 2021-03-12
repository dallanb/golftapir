import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { ProtectedRouteProps } from './types';
import './ProtectedRoute.less';
import routes from '@constants/routes';

const ProtectedRoute = ({
    component: Component,
    isLoggedIn,
    forceLogout,
    roleAccess = true,
    refresh,
    componentProps,
    ...restProps
}: ProtectedRouteProps) => {
    const protect = (props: any) => {
        if (forceLogout) {
            return (
                <Redirect
                    to={`${routes.APPS.AUTH_APP.ROUTE}${routes.ROUTES.LOGIN.ROUTE}`}
                />
            );
        }
        if (!roleAccess) {
            return (
                <Redirect
                    to={`${routes.APPS.MEMBER_APP.ROUTE}${routes.ROUTES.HOME.ROUTE}`}
                />
            );
        }
        if (isLoggedIn) {
            // // TODO: maybe try to pass in props like league here!
            return <Component {...props} {...componentProps} />;
        }
        return (
            <Redirect
                to={`${routes.APPS.MEMBER_APP.ROUTE}${routes.ROUTES.HOME.ROUTE}`}
            />
        );
    };
    return <Route {...restProps} render={protect} />;
};

export default ProtectedRoute;
