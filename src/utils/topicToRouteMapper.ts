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
                case constants.EVENTS.CONTESTS.PARTICIPANT_INACTIVE:
                case constants.EVENTS.CONTESTS.PARTICIPANT_ACTIVE:
                case constants.EVENTS.CONTESTS.PARTICIPANT_COMPLETED:
                case constants.EVENTS.CONTESTS.CONTEST_READY:
                case constants.EVENTS.CONTESTS.CONTEST_INACTIVE:
                case constants.EVENTS.CONTESTS.CONTEST_ACTIVE:
                case constants.EVENTS.CONTESTS.CONTEST_COMPLETED:
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
                    console.error('key not found');
            }

            break;
        case constants.TOPICS.LEAGUES:
            mapping.route += routes.ROUTES.MEMBERS.ROUTE;
            switch (key) {
                case constants.EVENTS.LEAGUES.MEMBER_PENDING:
                case constants.EVENTS.LEAGUES.MEMBER_ACTIVE:
                case constants.EVENTS.LEAGUES.MEMBER_INACTIVE:
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
                    console.error('key not found');
            }
            break;
        case constants.TOPICS.COURSES:
            mapping.route += routes.ROUTES.HOME.ROUTE;
            switch (key) {
                case constants.EVENTS.COURSES.COURSE_APPROVED:
                    mapping.route = withAppRoute(mapping.route, {
                        app: constants.APPS.MEMBER_APP,
                        routeProps: {},
                    });
                    break;
                default:
                    console.error('key not found');
            }
            break;
        default:
            throw new Error(`Invalid topic: ${topic}`);
    }
    return mapping;
};

export default topicToRouteMapper;
