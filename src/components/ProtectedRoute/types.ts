import React from 'react';

export interface ProtectedRouteProps {
    component: new () => React.Component;
    componentProps?: any;
    isLoggedIn: boolean;
    forceLogout: boolean;
    path: string;
    exact: boolean | undefined;
    refresh?: () => void;
}
