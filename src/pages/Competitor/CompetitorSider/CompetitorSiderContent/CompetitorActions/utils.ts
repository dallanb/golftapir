import { useHistory } from 'react-router-dom';
import memoize from 'memoize-one';
import constants from '@constants';

export const generateActions = (uuid?: string) => {
    const actions = [];
    const history = useHistory();
    if (uuid) {
        actions.push({
            key: constants.ACTION.CHALLENGE.KEY,
            onClick: () =>
                history.push(`/app${constants.ROUTES.CONTESTS_CREATE.ROUTE}`, {
                    participant_uuid: uuid,
                }),
        });
    }
    return actions;
};

export const memoizedGenerateActions = memoize(generateActions);
