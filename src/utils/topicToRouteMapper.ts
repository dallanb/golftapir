import { get as _get } from 'lodash';
import constants from '@constants';
import routes from '@constants/routes';

const topicToRouteMapper = (
    topic: string,
    key: string,
    item: any
): { route: string; state: any } => {
    const mapping = {
        route: '',
        state: {},
    };
    switch (topic) {
        case constants.TOPICS.AUTH:
            mapping.route += routes.AUTH_APP.AUTH.ROUTE;
            break;
        case constants.TOPICS.ACCOUNTS:
            mapping.route += routes.MEMBER_APP.ACCOUNT.ROUTE;
            break;
        case constants.TOPICS.CONTESTS:
            mapping.route += routes.MEMBER_APP.CONTEST.ROUTE;
            switch (key) {
                case constants.EVENTS.CONTESTS.PARTICIPANT_INVITED:
                case constants.EVENTS.CONTESTS.PARTICIPANT_ACTIVE:
                case constants.EVENTS.CONTESTS.CONTEST_READY:
                case constants.EVENTS.CONTESTS.CONTEST_ACTIVE:
                    mapping.state = {
                        uuid: _get(item, ['properties', 'contest_uuid'], ''),
                    };
                    break;
                default:
                    console.log('key not found');
            }

            break;
        default:
            throw new Error(`Invalid topic: ${topic}`);
    }
    return mapping;
};

export default topicToRouteMapper;
