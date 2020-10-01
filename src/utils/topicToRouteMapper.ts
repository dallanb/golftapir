import constants from '@constants';
import { get as _get } from 'lodash';

const topicToRouteMapper = (topic: string, key: string, item: any) => {
    let route = '';
    const routes = constants.ROUTES;
    switch (topic) {
        case 'auth':
            route = routes.AUTH;
            break;
        case 'accounts':
            route = routes.ACCOUNT;
            break;
        case 'contests':
            route = routes.CONTEST;
            switch (key) {
                case 'participant_invited':
                    route += `/${_get(
                        item,
                        ['properties', 'contest_uuid'],
                        ''
                    )}`;
                    break;
                default:
                    console.log('key not found');
            }

            break;
        default:
            throw new Error(`Invalid topic: ${topic}`);
    }
    return route;
};

export default topicToRouteMapper;
