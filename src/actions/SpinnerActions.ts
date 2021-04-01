import { createActions } from 'reduxsauce';

const { Types, Creators } = createActions(
    {
        closeSpinner: null,
        openSpinner: ['message'],
    },
    {
        prefix: 'SPINNER_',
    }
);

export const SpinnerTypes = Types;
export default Creators;
