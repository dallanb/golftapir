import { createActions } from 'reduxsauce';

const { Types, Creators } = createActions(
    {
        init: null,
        initSuccess: null,
        initFailure: ['err'],
        terminate: null,
        set: ['data'],
        fetchData: ['options', 'append'], // at the moment the passed in parameters are being ignored
        fetchDataSuccess: ['data', 'metadata'],
        fetchDataFailure: ['err'],
    },
    {
        prefix: 'MEMBER_PAGE_CONTENT_MEMBER_RESULTS_',
    }
);
export const MemberPageContentMemberResultsTypes = Types;
export default Creators;
