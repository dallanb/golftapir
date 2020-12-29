import { useHistory } from 'react-router-dom';
import memoize from 'memoize-one';
import constants from '@constants';
import routes from '@constants/routes';

export const generateActions = (uuid?: string) => {
    const actions = [];
    const history = useHistory();
    if (uuid) {
        actions.push({
            key: constants.ACTION.CHALLENGE.KEY,
            onClick: () =>
                history.push(routes.MEMBER_APP.CONTESTS_CREATE.ROUTE, {
                    participant_uuid: uuid,
                }),
        });
    }
    return actions;
};

export const memoizedGenerateActions = memoize(generateActions);
