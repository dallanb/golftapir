import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { Redirect, Route, Switch, withRouter } from 'react-router-dom';
import { get as _get, map as _map } from 'lodash';
import { message, Spin } from 'antd';
import { MemberAppLayout } from '@layouts';
import {
    ComponentRoute,
    LeagueAppViewProps,
    LeagueAppViewState,
} from './types';
import { AppLoading, ProtectedRoute } from '@components';
import { routes, protectedRoutes } from './routes';
import constants from '@constants';
import constantRoutes from '@constants/routes';
import { AuthActions } from '@actions';
import LeagueAppActions from './actions';
import statics from '@apps/LeagueApp/statics';
import { FirebaseClient } from '@libs';
import { getMenuSelectedKey, withAppRoute, withS3URL } from '@utils';

class LeagueAppView extends React.Component<
    LeagueAppViewProps,
    LeagueAppViewState
> {
    constructor(props: LeagueAppViewProps) {
        super(props);
        this.state = {
            selectedKeys: getMenuSelectedKey(
                location.pathname,
                constants.APPS.LEAGUE_APP,
                _map(statics, 'key')
            ),
        };
    }

    componentDidMount() {
        const { preInit, init, history, location, match } = this.props;
        const prevLeague = _get(location, ['state'], null);
        const prevUUID = _get(match, ['params', 'league_uuid'], null);
        if (!prevUUID) {
            history.push(
                withAppRoute(constantRoutes.ROUTES.HOME.ROUTE, {
                    app: constants.APPS.MEMBER_APP,
                    routeProps: {},
                })
            );
        } else {
            preInit(prevLeague);
            init(prevUUID);
            FirebaseClient.onMessageListener()
                .then((payload) => {
                    const { title, body } = payload.data;
                    message.success(`${title}; ${body}`);
                })
                .catch((err) => {
                    message.error(JSON.stringify(err));
                });
        }
    }

    componentWillUnmount() {
        const { terminate } = this.props;
        terminate();
    }

    componentDidUpdate(prevProps: LeagueAppViewProps) {
        const { leagueUUID: prevLeagueUUID } = prevProps;
        const { isReady, isFetching, refresh, match } = this.props;
        const leagueUUID = _get(match, ['params', 'league_uuid'], null);
        if (
            isReady &&
            !isFetching &&
            prevLeagueUUID &&
            prevLeagueUUID !== leagueUUID
        ) {
            refresh(leagueUUID);
        }
    }

    render() {
        const {
            leagueUUID,
            isReady,
            isLoggedIn,
            forceLogout,
            refreshAuth,
            name,
            avatar,
            menuProps,
        } = this.props;
        const { selectedKeys } = this.state;

        if (!isReady) return <AppLoading />;
        return (
            <MemberAppLayout
                app={constants.APPS.LEAGUE_APP}
                name={name}
                avatar={avatar}
                menuProps={menuProps}
                menuRoutes={statics}
                menuItemOnClick={({ key }: { key: any }, path: string) => {
                    this.setState({ selectedKeys: key });
                }}
                selectedKeys={selectedKeys}
            >
                <Switch>
                    {routes.map(
                        ({ path, component, exact }: ComponentRoute) => (
                            <Route
                                key={path}
                                path={`${constantRoutes.APPS.LEAGUE_APP.ROUTE}${path}`}
                                component={component}
                                exact={exact}
                            />
                        )
                    )}
                    {protectedRoutes.map(
                        ({ path, component, exact }: ComponentRoute) => (
                            <ProtectedRoute
                                key={path}
                                path={`${constantRoutes.APPS.LEAGUE_APP.ROUTE}${path}`}
                                component={component}
                                exact={exact}
                                isLoggedIn={isLoggedIn}
                                forceLogout={forceLogout}
                                refresh={() => refreshAuth()}
                            />
                        )
                    )}
                    <Route
                        render={() => (
                            <Redirect
                                to={withAppRoute(
                                    constantRoutes.ROUTES.HOME.ROUTE,
                                    {
                                        app: constants.APPS.LEAGUE_APP,
                                        routeProps: { league_uuid: leagueUUID },
                                    }
                                )}
                            />
                        )}
                    />
                </Switch>
            </MemberAppLayout>
        );
    }
}

const mapStateToProps = ({ leagueApp, base }: any) => {
    const { isInitialized, isRefreshing, isFetching, league, uuid } = leagueApp;
    const { me, isLoggedIn, forceLogout } = base;

    const leagueUUID = uuid;
    const name = _get(me, ['display_name'], '');
    const avatar = _get(me, ['avatar', 's3_filename'], '');
    const leagueName = _get(league, ['data', 'name'], '');
    const leagueAvatar = withS3URL(
        _get(league, ['data', 'avatar', 's3_filename'], null),
        constants.S3_FOLDERS.LEAGUE.AVATAR
    );
    const leagueIsFetching = _get(league, ['isFetching'], false);
    const menuProps = {
        paths: {
            [constantRoutes.ROUTES.LEAGUE_HOME.KEY]: {
                league_uuid: leagueUUID,
            },
            [constantRoutes.ROUTES.MEMBER_SETTINGS.KEY]: {
                league_uuid: leagueUUID,
            },
            [constantRoutes.ROUTES.MEMBERS.KEY]: { league_uuid: leagueUUID },
            [constantRoutes.ROUTES.CONTESTS.KEY]: { league_uuid: leagueUUID },
        },
        names: { [constantRoutes.ROUTES.LEAGUE_HOME.KEY]: leagueName },
        icons: {
            [constantRoutes.ROUTES.LEAGUE_HOME.KEY]: {
                src: leagueAvatar,
                name: leagueName,
                shape: 'square',
                style: { borderRadius: '4px' },
                size: 24,
            },
        },
    };

    return {
        name,
        avatar,
        leagueUUID,
        isFetching: isFetching || leagueIsFetching,
        isReady: isInitialized && !isRefreshing,
        isLoggedIn,
        forceLogout,
        menuProps,
    };
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        preInit(league: any) {
            dispatch(LeagueAppActions.preInit(league));
        },
        init(uuid: string) {
            dispatch(LeagueAppActions.init(uuid));
        },
        terminate() {
            dispatch(LeagueAppActions.terminate());
        },
        refresh(uuid: string) {
            dispatch(LeagueAppActions.refresh(uuid));
        },
        refreshAuth() {
            dispatch(AuthActions.refresh());
        },
    };
};

export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(LeagueAppView)
);
