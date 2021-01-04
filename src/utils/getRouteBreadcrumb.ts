import { get as _get } from 'lodash';
import routes from '@constants/routes';

const getRouteBreadcrumb = (
    route: string
): { key: any; label: any; icon: any } => {
    const routeObj = Object.values(routes.ROUTES).find(
        (value: any) => value.ROUTE === route
    );

    const key = _get(routeObj, ['KEY'], '');
    const label = _get(routeObj, ['LABEL'], '');
    const icon = _get(routeObj, ['ICON'], null);
    return { key, label, icon };
};

export default getRouteBreadcrumb;
