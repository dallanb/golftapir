import { get as _get } from 'lodash';
import routes from '@constants/routes';

const getRouteBase = (route: string) => {
    const routeObj = Object.values(routes).find(
        (value: any) => `/app${value.ROUTE}` === route
    );

    const baseRoute = _get(routeObj, ['BASE_ROUTE'], '');
    return `/app${baseRoute}`;
};

export default getRouteBase;
