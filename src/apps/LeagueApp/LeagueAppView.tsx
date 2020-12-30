import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    Redirect,
    Route,
    Switch,
    useHistory,
    useParams,
} from 'react-router-dom';
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
import {
    selectData as selectBaseData,
    selectLeague,
} from '@selectors/BaseSelector';
import { selectData as selectAuthData } from '@selectors/AuthSelectors';
import { withS3URL } from '@utils';
import constants from '@constants';

const LeagueAppView: React.FunctionComponent<LeagueAppViewProps> = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const params = useParams();
    const prevLeague = _get(history, ['location', 'state'], null);
    const prevUUID = _get(params, ['uuid'], null);
    useEffect(() => {
        if (!prevUUID) {
            history.push(constantRoutes.MEMBER_APP.HOME.ROUTE);
        } else {
            dispatch(BaseActions.preInit(prevLeague));
            dispatch(BaseActions.init(prevUUID));
            FirebaseClient.onMessageListener()
                .then((payload) => {
                    const { title, body } = payload.data;
                    message.success(`${title}; ${body}`);
                })
                .catch((err) => {
                    message.error(JSON.stringify(err));
                });
        }
        return () => {
            dispatch(BaseActions.terminate());
        };
    }, []);

    const league = useSelector(selectLeague);
    const { me, isInitialized } = useSelector(selectBaseData);
    const { isLoggedIn, forceLogout } = useSelector(selectAuthData);
    const name = _get(me, ['display_name'], '');
    const avatar = _get(me, ['avatar', 's3_filename'], '');
    const leagueUUID = _get(league, ['uuid'], '');
    const leagueName = _get(league, ['name'], '');
    const leagueAvatar = withS3URL(
        _get(league, ['avatar', 's3_filename'], null),
        constants.S3_FOLDERS.LEAGUE.AVATAR
    );
    const menuProps = {
        paths: { league: { uuid: leagueUUID } },
        names: { league: leagueName },
        icons: {
            league: {
                src: leagueAvatar,
                name: leagueName,
                shape: 'square',
                style: { borderRadius: '4px' },
                size: 24,
            },
        },
    };

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
