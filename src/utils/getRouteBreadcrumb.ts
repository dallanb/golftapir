import { get as _get } from 'lodash';
import constants from '@constants';

const getRouteBreadcrumb = (route: string) => {
    const routeObj = Object.values(constants.ROUTES).find(
        (value: any) => `/app${value.ROUTE}` === route
    );

    return _get(routeObj, ['KEY'], '');
};

export default getRouteBreadcrumb;
