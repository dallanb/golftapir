import { useHistory, useParams } from 'react-router-dom';
import memoize from 'memoize-one';
import constants from '@constants';
import routes from '@constants/routes';
import { navigate, withAppRoute } from '@utils';

export const renderAction = (
    key: string,
    options: any
): { show: boolean; enabled: boolean } => {
    const renderAction = { show: false, enabled: true };
    switch (key) {
        case constants.ACTION.CHALLENGE.KEY:
            renderAction.show = !options.isMe;
            renderAction.enabled = true;
            break;
        case constants.ACTION.MESSAGE.KEY:
            renderAction.show = !options.isMe;
            renderAction.enabled = false;
            break;
        default:
            console.error('Invalid key: ', key);
    }
    return renderAction;
};

export const generateActions = (uuid?: string) => {
    const actions = [];
    const history = useHistory();
    const params = useParams();
    if (uuid) {
        actions.push(
            {
                key: constants.ACTION.CHALLENGE.KEY,
                onClick: () =>
                    navigate(
                        history,
                        withAppRoute(routes.ROUTES.CONTESTS_CREATE.ROUTE, {
                            routeProps: params,
                        }),
                        {
                            member_uuid: uuid,
                        }
                    ),
            },
            {
                key: constants.ACTION.MESSAGE.KEY,
            }
        );
    }
    return actions;
};

export const memoizedGenerateActions = memoize(generateActions);
