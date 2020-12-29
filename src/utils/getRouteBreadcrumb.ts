import { get as _get } from 'lodash';
import routes from '@constants/routes';
import { ReactElement } from 'react';

const getRouteBreadcrumb = (
    route: string
): { key: any; label: any; icon: any } => {
    const app = route.split('/')[1];
    let appRoutes = {};
    switch (app) {
        case 'app':
            appRoutes = routes.MEMBER_APP;
            break;
        case 'auth':
            appRoutes = routes.AUTH_APP;
            break;
        case 'league':
            appRoutes = routes.LEAGUE_APP;
            break;
    }
    const routeObj = Object.values(appRoutes).find(
        (value: any) => value.ROUTE === route
    );

    const key = _get(routeObj, ['KEY'], '');
    const label = _get(routeObj, ['LABEL'], '');
    const icon = _get(routeObj, ['ICON'], null);
    return { key, label, icon };
};

export default getRouteBreadcrumb;
