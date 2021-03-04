import memoize from 'memoize-one';
import constants from '@constants';
import routes from '@constants/routes';

export const getMenuSelectedKey = (
    route: string,
    app: string,
    keys: any[]
): string[] => {
    const routeSnippets = route.split('/');
    let cleanSnippets: string[] = [];
    switch (app) {
        case constants.APPS.MEMBER_APP:
            cleanSnippets = routeSnippets.slice(2).length
                ? routeSnippets.slice(2)
                : [routes.ROUTES.HOME.ROUTE];
            break;
        case constants.APPS.LEAGUE_APP:
            cleanSnippets = routeSnippets.slice(3).length
                ? routeSnippets.slice(3)
                : [routes.ROUTES.LEAGUE_HOME.ROUTE];
            break;
    }
    const match = Object.values(routes.ROUTES).find((constantRoute: any) => {
        const constantRouteSnippets = constantRoute.ROUTE.split('/').filter(
            (snippet: string) => snippet
        );
        return cleanSnippets.every((snippet, index) => {
            if (
                constantRouteSnippets[index] &&
                constantRouteSnippets[index].startsWith(':')
            ) {
                return true;
            }
            return snippet === constantRouteSnippets[index];
        });
    });

    if (match) {
        const keyIndex = keys.findIndex((key) => key === match.BASE_KEY);
        return [`${keyIndex}`];
    }
    return ['0'];
};

export default getMenuSelectedKey;
