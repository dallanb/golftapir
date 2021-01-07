import { get as _get } from 'lodash';
import constants from '@constants';
import routes from '@constants/routes';
import { withAppRoute } from '@utils/index';

const topicToRouteMapper = (
    topic: string,
    key: string,
    item: any
): {
    route: string;
    state: any;
} => {
    console.log('TOPIC: ', topic);
    console.log('KEY: ', key);
    console.log('ITEM: ', item);
    const mapping = {
        route: '',
        state: {},
    };
    switch (topic) {
        case constants.TOPICS.AUTH:
            mapping.route += routes.ROUTES.LOGOUT.ROUTE;
            break;
        case constants.TOPICS.ACCOUNTS:
            mapping.route += routes.ROUTES.ACCOUNT.ROUTE;
            break;
        case constants.TOPICS.CONTESTS:
            mapping.route += routes.ROUTES.CONTEST.ROUTE;
            switch (key) {
                case constants.EVENTS.CONTESTS.PARTICIPANT_INVITED:
                case constants.EVENTS.CONTESTS.PARTICIPANT_ACTIVE:
                case constants.EVENTS.CONTESTS.PARTICIPANT_COMPLETED:
                case constants.EVENTS.CONTESTS.CONTEST_READY:
                case constants.EVENTS.CONTESTS.CONTEST_ACTIVE:
                    mapping.route = withAppRoute(mapping.route, {
                        routeProps: {
                            contest_uuid: _get(
                                item,
                                ['properties', 'contest_uuid'],
                                ''
                            ),
                            league_uuid: _get(
                                item,
                                ['properties', 'league_uuid'],
                                ''
                            ),
                        },
                    });
                    mapping.state = {
                        uuid: _get(item, ['properties', 'contest_uuid'], ''),
                    };
                    break;
                default:
                    console.log('key not found');
            }

            break;
        case constants.TOPICS.MEMBERS:
            mapping.route += routes.ROUTES.MEMBERS.ROUTE;
            switch (key) {
                case constants.EVENTS.MEMBERS.MEMBER_INVITED:
                case constants.EVENTS.MEMBERS.MEMBER_ACTIVE:
                    mapping.route = withAppRoute(mapping.route, {
                        app: constants.APPS.LEAGUE_APP,
                        routeProps: {
                            league_uuid: _get(
                                item,
                                ['properties', 'league_uuid'],
                                ''
                            ),
                        },
                    });
                    mapping.state = {
                        uuid: _get(item, ['properties', 'league_uuid'], ''),
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
