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
            return <Redirect to={routes.ROUTES.LOGIN.ROUTE} />;
        }
        if (!roleAccess) {
            return <Redirect to={routes.ROUTES.HOME.ROUTE} />;
        }
        if (isLoggedIn) {
            // // TODO: maybe try to pass in props like league here!
            return <Component {...props} {...componentProps} />;
        }
        return <Redirect to={routes.ROUTES.HOME.ROUTE} />;
    };
    return <Route {...restProps} render={protect} />;
};

export default ProtectedRoute;
