import routes from '@constants/routes';

const getAppRoutes = (route: string) => {
    const app = route.split('/')[1];
    let appRoutes = {};
    switch (app) {
        case 'app':
            appRoutes = routes.MEMBER_APP;
            break;
        case 'auth':
            appRoutes = routes.AUTH_APP;
            break;
        case 'leagues':
            appRoutes = routes.LEAGUE_APP;
            break;
    }
    return appRoutes;
};

export default getAppRoutes;
