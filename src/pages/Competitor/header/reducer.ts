// @ts-ignore
import { static as Immutable } from 'seamless-immutable';
import { createReducer } from 'reduxsauce';
import CONSTANTS from '@locale/en-CA';
import { CompetitorPageHeaderTypes } from './actions';
import { CompetitorPageHeaderInterface } from './types';
import { get as _get } from 'lodash';
import { withS3URL } from '@utils';
import constants from '@constants';

/* ------------- Initial State ------------- */
const INITIAL_STATE: CompetitorPageHeaderInterface = {
    isFetching: false,
    isInitialized: false,
    err: undefined,
    title: CONSTANTS.PAGES.COMPETITOR.TITLE,
    subTitle: CONSTANTS.PAGES.COMPETITOR.DESCRIPTION,
    avatar: {
        name: '',
        src: undefined,
        size: 72,
    },
};

/* ------------- Reducers ------------- */
function init(state = INITIAL_STATE) {
    return Immutable.merge(state, {
        ...INITIAL_STATE,
        isFetching: true,
        isInitialized: false,
        err: null,
    });
}

function initSuccess(state = INITIAL_STATE) {
    return Immutable.merge(state, {
        isFetching: false,
        isInitialized: true,
        err: null,
    });
}

function initFailure(state: any, { err }: any) {
    return Immutable.merge(state, {
        isFetching: false,
        isInitialized: false,
        err,
    });
}

function terminate() {
    return INITIAL_STATE;
}

function set(state: any, { data }: any) {
    return Immutable.merge(state, {
        ...data,
    });
}

function setTitle(state: any, { data }: any) {
    const first_name = _get(data, ['first_name'], '');
    const last_name = _get(data, ['last_name'], '');
    const title = `${first_name} ${last_name}`;
    return Immutable.merge(state, {
        title,
    });
}

function setAvatar(state: any, { data }: any) {
    const first_name = _get(data, ['first_name'], '');
    const last_name = _get(data, ['last_name'], '');
    const filename = _get(data, ['avatar', 's3_filename'], null);
    const name = `${first_name} ${last_name}`;
    const src =
        filename && withS3URL(filename, constants.S3_FOLDERS.ACCOUNT.AVATAR);
    return Immutable.merge(state, {
        avatar: {
            ...state.avatar,
            src,
            name,
        },
    });
}

const HANDLERS = {
    [CompetitorPageHeaderTypes.INIT]: init,
    [CompetitorPageHeaderTypes.INIT_SUCCESS]: initSuccess,
    [CompetitorPageHeaderTypes.INIT_FAILURE]: initFailure,
    [CompetitorPageHeaderTypes.TERMINATE]: terminate,
    [CompetitorPageHeaderTypes.SET]: set,
    [CompetitorPageHeaderTypes.SET_TITLE]: setTitle,
    [CompetitorPageHeaderTypes.SET_AVATAR]: setAvatar,
};

export const reducer = createReducer(INITIAL_STATE, HANDLERS);
