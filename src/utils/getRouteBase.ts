import { get as _get } from 'lodash';
import constants from '@constants';

const getRouteBase = (route: string) => {
    const routeObj = Object.values(constants.ROUTES).find(
        (value: any) => `/app${value.ROUTE}` === route
    );

    const baseRoute = _get(routeObj, ['BASE_ROUTE'], '');
    return `/app${baseRoute}`;
};

export default getRouteBase;
