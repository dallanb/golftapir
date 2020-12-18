import { get as _get } from 'lodash';
import routes from '@constants/routes';

const getRouteBreadcrumb = (route: string) => {
    const routeObj = Object.values(routes).find(
        (value: any) => `/app${value.ROUTE}` === route
    );

    const key = _get(routeObj, ['KEY'], '');
    const icon = _get(routeObj, ['ICON'], null);
    return { key, icon };
};

export default getRouteBreadcrumb;
