import { get as _get } from 'lodash';
import routes from '@constants/routes';
import { ReactElement } from 'react';

const getRouteBreadcrumb = (
    route: string
): { key: any; label: any; icon: any } => {
    const routeObj = Object.values(routes).find(
        (value: any) => `/app${value.ROUTE}` === route
    );

    const key = _get(routeObj, ['KEY'], '');
    const label = _get(routeObj, ['LABEL'], '');
    const icon = _get(routeObj, ['ICON'], null);
    return { key, label, icon };
};

export default getRouteBreadcrumb;
