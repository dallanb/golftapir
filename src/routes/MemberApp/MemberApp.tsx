import { Redirect, Route, Switch } from 'react-router-dom';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import accountRoutes from './accountRoutes';
import homeRoutes from './homeRoutes';
import { MemberAppLayout } from '../../layouts';
import { ProtectedRoute } from '../../components';
import {
    selectForceLogout,
    selectIsLoggedIn,
} from '../../selectors/AuthSelectors';
import AuthActions from '../../reducers/AuthReducer';
import { ComponentRoute } from '../types';
import contestRoutes from './contestRoutes';

const MemberApp = ({ url }: { url: string }) => {
    const isLoggedIn = useSelector(selectIsLoggedIn);
    const forceLogout = useSelector(selectForceLogout);
    const dispatch = useDispatch();

    return (
        <MemberAppLayout>
            <Switch>
                {accountRoutes.map(
                    ({ path, component, exact }: ComponentRoute) => (
                        <ProtectedRoute
                            key={path}
                            path={`${url}${path}`}
                            component={component}
                            exact={exact}
                            isLoggedIn={isLoggedIn}
                            forceLogout={forceLogout}
                            refresh={() => dispatch(AuthActions.refresh())}
                        />
                    )
                )}
                {contestRoutes.map(
                    ({ path, component, exact }: ComponentRoute) => (
                        <ProtectedRoute
                            key={`${url}${path}`}
                            component={component}
                            isLoggedIn={isLoggedIn}
                            forceLogout={forceLogout}
                            path={`${url}${path}`}
                            exact={exact}
                            refresh={() => dispatch(AuthActions.refresh())}
                        />
                    )
                )}
                {homeRoutes.map(
                    ({ path, component, exact }: ComponentRoute) => (
                        <ProtectedRoute
                            key={path}
                            path={`${url}${path}`}
                            component={component}
                            exact={exact}
                            isLoggedIn={isLoggedIn}
                            forceLogout={forceLogout}
                            refresh={() => dispatch(AuthActions.refresh())}
                        />
                    )
                )}
                <Route render={() => <Redirect to={`${url}/home`} />} />
            </Switch>
        </MemberAppLayout>
    );
};
export default MemberApp;
