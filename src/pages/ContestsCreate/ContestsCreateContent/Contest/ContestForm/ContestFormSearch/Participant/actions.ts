import { createActions } from 'reduxsauce';

const { Types, Creators } = createActions(
    {
        search: ['key'],
        searchSuccess: ['data'],
        searchFailure: ['err'],
        clearSearch: null
    },
    {
        prefix: 'CONTESTS_CREATE_PAGE_CONTENT_CONTEST_SEARCH_PARTICIPANT_',
    }
);
export const ContestsCreatePageContentContestSearchParticipantTypes = Types;
export default Creators;
