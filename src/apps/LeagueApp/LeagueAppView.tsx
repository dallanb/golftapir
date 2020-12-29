import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, Route, Switch, useHistory } from 'react-router-dom';
import { get as _get } from 'lodash';
import { message, Spin } from 'antd';
import { MemberAppLayout } from '@layouts';
import { ComponentRoute, LeagueAppViewProps } from './types';
import { ProtectedRoute } from '@components';
import { routes, protectedRoutes } from './routes';
import constantRoutes from '@constants/routes';
import { AuthActions } from '@actions';
import BaseActions from './actions';
import statics from '@apps/LeagueApp/statics';
import { FirebaseClient } from '@libs';
import { selectData as selectBaseData } from '@selectors/BaseSelector';
import { selectData as selectAuthData } from '@selectors/AuthSelectors';
import { withS3URL } from '@utils';
import constants from '@constants';

const LeagueAppView: React.FunctionComponent<LeagueAppViewProps> = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const league = _get(history, ['location', 'state'], null);
    const { me, isInitialized } = useSelector(selectBaseData);
    const { isLoggedIn, forceLogout } = useSelector(selectAuthData);
    const name = _get(me, ['display_name'], '');
    const avatar = _get(me, ['avatar', 's3_filename'], '');
    const menuProps = {
        names: { league: league.name },
        icons: {
            league: {
                src: withS3URL(
                    league.avatar.s3_filename,
                    constants.S3_FOLDERS.LEAGUE.AVATAR
                ),
                name: league.name,
                shape: 'square',
                style: { borderRadius: '4px' },
                size: 24,
            },
        },
    };

    useEffect(() => {
        dispatch(BaseActions.preInit(league));
        dispatch(BaseActions.init(league.uuid));
        FirebaseClient.onMessageListener()
            .then((payload) => {
                const { title, body } = payload.data;
                message.success(`${title}; ${body}`);
            })
            .catch((err) => {
                message.error(JSON.stringify(err));
            });
        return () => {
            dispatch(BaseActions.terminate());
        };
    }, []);

    if (!isInitialized) return <Spin />;
    return (
        <MemberAppLayout
            name={name}
            avatar={avatar}
            menuProps={menuProps}
            menuRoutes={statics}
        >
            <Switch>
                {routes.map(({ path, component, exact }: ComponentRoute) => (
                    <Route
                        key={path}
                        path={path}
                        component={component}
                        exact={exact}
                    />
                ))}
                {protectedRoutes.map(
                    ({ path, component, exact }: ComponentRoute) => (
                        <ProtectedRoute
                            key={path}
                            path={path}
                            component={component}
                            exact={exact}
                            isLoggedIn={isLoggedIn}
                            forceLogout={forceLogout}
                            refresh={() => dispatch(AuthActions.refresh())}
                        />
                    )
                )}
                <Route
                    render={() => (
                        <Redirect to={constantRoutes.LEAGUE_APP.LEAGUE.ROUTE} />
                    )}
                />
            </Switch>
        </MemberAppLayout>
    );
};

export default LeagueAppView;
