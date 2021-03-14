// @ts-ignore
import { static as Immutable } from 'seamless-immutable';
import { createReducer } from 'reduxsauce';
import { CoursesCreatePageContentCourseTypes } from './actions';
import { CoursesCreatePageContentCourseInterface } from './types';

/* ------------- Initial State ------------- */
const INITIAL_STATE: CoursesCreatePageContentCourseInterface = {
    isSubmitting: false,
    isSubmitted: false,
    isInitialized: false,
    err: undefined,
    initialValues: undefined,
    result: undefined,
};

/* ------------- Reducers ------------- */
function init(state = INITIAL_STATE) {
    return Immutable.merge(state, {
        ...INITIAL_STATE,
        isInitialized: false,
        err: null,
    });
}

function initSuccess(state = INITIAL_STATE) {
    return Immutable.merge(state, {
        isInitialized: true,
        err: null,
    });
}

function initFailure(state: any, { err }: any) {
    return Immutable.merge(state, {
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

function setInitialValues(state: any, { initialValues }: any) {
    return Immutable.merge(state, {
        initialValues,
    });
}

function setResult(state: any, { result }: any) {
    return Immutable.merge(state, {
        result,
    });
}

function submit(state: any) {
    return Immutable.merge(state, {
        isSubmitting: true,
    });
}

function submitSuccess(state: any) {
    return Immutable.merge(state, {
        isSubmitting: false,
        isSubmitted: true,
    });
}

function submitFailure(state: any, { err }: any) {
    return Immutable.merge(state, {
        isSubmitting: false,
        err,
    });
}

const HANDLERS = {
    [CoursesCreatePageContentCourseTypes.INIT]: init,
    [CoursesCreatePageContentCourseTypes.INIT_SUCCESS]: initSuccess,
    [CoursesCreatePageContentCourseTypes.INIT_FAILURE]: initFailure,
    [CoursesCreatePageContentCourseTypes.TERMINATE]: terminate,
    [CoursesCreatePageContentCourseTypes.SET]: set,
    [CoursesCreatePageContentCourseTypes.SET_INITIAL_VALUES]: setInitialValues,
    [CoursesCreatePageContentCourseTypes.SET_RESULT]: setResult,
    [CoursesCreatePageContentCourseTypes.SUBMIT]: submit,
    [CoursesCreatePageContentCourseTypes.SUBMIT_SUCCESS]: submitSuccess,
    [CoursesCreatePageContentCourseTypes.SUBMIT_FAILURE]: submitFailure,
};

export const reducer = createReducer(INITIAL_STATE, HANDLERS);
