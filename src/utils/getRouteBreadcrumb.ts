import { get as _get } from 'lodash';
import getAppRoutes from '@utils/getAppRoutes';

const getRouteBreadcrumb = (
    route: string
): { key: any; label: any; icon: any } => {
    const appRoutes = getAppRoutes(route);
    const routeObj = Object.values(appRoutes).find(
        (value: any) => value.ROUTE === route
    );

    const key = _get(routeObj, ['KEY'], '');
    const label = _get(routeObj, ['LABEL'], '');
    const icon = _get(routeObj, ['ICON'], null);
    return { key, label, icon };
};

export default getRouteBreadcrumb;
