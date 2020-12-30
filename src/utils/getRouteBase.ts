import { get as _get } from 'lodash';
import getAppRoutes from '@utils/getAppRoutes';

const getRouteBase = (route: string) => {
    const appRoutes = getAppRoutes(route);
    const routeSplit = route.split('/');
    const routeObj = Object.values(appRoutes).find((appRoute: any) => {
        const appRouteSplit = appRoute.ROUTE.split('/');
        if (appRouteSplit.length !== routeSplit.length) {
            return false;
        }
        return appRouteSplit.every((splitItem: string, index: number) => {
            if (splitItem.startsWith(':')) {
                return true;
            }
            if (splitItem === routeSplit[index]) {
                return true;
            }
            return false;
        });
    });

    return _get(routeObj, ['BASE_KEY'], null);
};

export default getRouteBase;
