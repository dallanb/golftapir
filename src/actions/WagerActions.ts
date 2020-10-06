// @ts-ignore
import { createActions } from 'reduxsauce';

const { Types, Creators } = createActions(
    {
        fetchWager: ['uuid', 'options'],
        fetchWagerSuccess: ['data', 'metadata'],
        fetchWagerFailure: ['err'],
        fetchWagers: ['options', 'append'],
        fetchWagersSuccess: ['data', 'metadata'],
        fetchWagersFailure: ['err'],
    },
    {
        prefix: 'WAGER_',
    }
);

export const WagerTypes = Types;
export default Creators;
