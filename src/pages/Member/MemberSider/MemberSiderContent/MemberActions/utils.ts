import { useHistory, useParams } from 'react-router-dom';
import memoize from 'memoize-one';
import constants from '@constants';
import routes from '@constants/routes';
import { withAppRoute } from '@utils';

export const generateActions = (uuid?: string) => {
    const actions = [];
    const history = useHistory();
    const params = useParams();
    if (uuid) {
        actions.push({
            key: constants.ACTION.CHALLENGE.KEY,
            onClick: () =>
                history.push(
                    withAppRoute(routes.ROUTES.CONTESTS_CREATE.ROUTE, {
                        routeProps: params,
                    }),
                    {
                        member_uuid: uuid,
                    }
                ),
        });
    }
    return actions;
};

export const memoizedGenerateActions = memoize(generateActions);
