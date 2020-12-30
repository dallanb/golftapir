import { get as _get } from 'lodash';

const withDynamicRoute = (route: string, options: any) => {
    const routeSnippets = route.split('/').filter((i) => i);
    const routeMap = routeSnippets.map((routeSnippet: string) => {
        if (routeSnippet.startsWith(':')) {
            return _get(options, [routeSnippet.slice(1)], null);
        }
        return routeSnippet;
    });
    return `/${routeMap.join('/')}`;
};

export default withDynamicRoute;
