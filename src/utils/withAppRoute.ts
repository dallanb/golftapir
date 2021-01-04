import { get as _get } from 'lodash';
import withDynamicRoute from '@utils/withDynamicRoute';
import constants from '@constants';
import routes from '@constants/routes';

const withAppRoute = (
    route: string,
    options: { app?: string; routeProps?: any }
) => {
    const { app, routeProps } = options;
    console.log(options);
    if (app) {
        switch (app) {
            case constants.APPS.AUTH_APP:
                return withDynamicRoute(
                    `${routes.APPS.AUTH_APP.ROUTE}${route}`,
                    routeProps
                );
            case constants.APPS.MEMBER_APP:
                return withDynamicRoute(
                    `${routes.APPS.MEMBER_APP.ROUTE}${route}`,
                    routeProps
                );

            case constants.APPS.LEAGUE_APP:
                return withDynamicRoute(
                    `${routes.APPS.LEAGUE_APP.ROUTE}${route}`,
                    routeProps
                );
        }
    }

    const leagueUUID = _get(routeProps, ['league_uuid'], undefined);
    if (leagueUUID) {
        return withDynamicRoute(
            `${routes.APPS.LEAGUE_APP.ROUTE}${route}`,
            routeProps
        );
    } else {
        return withDynamicRoute(
            `${routes.APPS.MEMBER_APP.ROUTE}${route}`,
            routeProps
        );
    }
};

export default withAppRoute;
