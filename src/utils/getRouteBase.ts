import { get as _get } from 'lodash';
import routes from '@constants/routes';

const getRouteBase = (route: string) => {
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
    return _get(routeObj, ['BASE_ROUTE'], '');
};

export default getRouteBase;
