import { useHistory } from 'react-router-dom';
import memoize from 'memoize-one';
import constants from '@constants';
import routes from '@constants/routes';
import { withAppRoute } from '@utils';

export const generateActions = (uuid?: string) => {
    const actions = [];
    const history = useHistory();
    if (uuid) {
        actions.push({
            key: constants.ACTION.CHALLENGE.KEY,
            onClick: () =>
                history.push(
                    withAppRoute(routes.ROUTES.CONTESTS_CREATE.ROUTE, {
                        app: constants.APPS.MEMBER_APP,
                    }),
                    {
                        participant_uuid: uuid,
                    }
                ),
        });
    }
    return actions;
};

export const memoizedGenerateActions = memoize(generateActions);
