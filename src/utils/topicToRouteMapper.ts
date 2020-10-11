import { get as _get } from 'lodash';
import constants from '@constants';

const topicToRouteMapper = (topic: string, key: string, item: any) => {
    let route = '';
    const routes = constants.ROUTES;
    switch (topic) {
        case constants.TOPICS.AUTH:
            route = routes.AUTH;
            break;
        case constants.TOPICS.ACCOUNTS:
            route = routes.ACCOUNT;
            break;
        case constants.TOPICS.CONTESTS:
            route = routes.CONTEST;
            switch (key) {
                case constants.EVENTS.CONTESTS.PARTICIPANT_INVITED:
                case constants.EVENTS.CONTESTS.PARTICIPANT_ACTIVE:
                case constants.EVENTS.CONTESTS.CONTEST_READY:
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
