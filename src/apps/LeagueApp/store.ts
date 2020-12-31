import { applyMiddleware, compose, createStore, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { all, fork } from 'redux-saga/effects';
import { createLogger } from 'redux-logger';
import { get as _get } from 'lodash';
import { reducer as base } from '@apps/LeagueApp/reducer';
import {
    authReducer as auth,
    modalReducer as modal,
    notificationReducer as notification,
} from '@reducers';
import { leaguePage, LeaguePageSaga } from '@pages';
import { default as BaseSaga } from '@apps/LeagueApp/saga';
import {
    AccountSaga,
    AuthSaga,
    ContestSaga,
    CourseSaga,
    LeagueSaga,
    ModalSaga,
    NotificationSaga,
    ScoreSaga,
    SocketSaga,
    TopicSocketSaga,
} from '@sagas';
import { saveState } from '../../localStorage';

function configStore(options?: { preloadedState: any }): any {
    const middleware = [];
    const enhancers = [];
    let monitor = null;

    /* ------------- Assemble Middleware ------------- */
    monitor = (window as any).__SAGA_MONITOR_EXTENSION__;
    const loggerMiddleware = createLogger({
        collapsed: true,
    });
    middleware.push(loggerMiddleware);

    const sagaMiddleware = createSagaMiddleware({ sagaMonitor: monitor });
    middleware.push(sagaMiddleware);

    enhancers.push(applyMiddleware(...middleware));

    const store = createStore(
        combineReducers({
            base,
            auth,
            modal,
            notification,
            leaguePage,
        }),
        _get(options, ['preloadedState'], {}),
        compose(
            ...enhancers,
            (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
                (window as any).__REDUX_DEVTOOLS_EXTENSION__()
        )
    );

    function* memberAppSaga() {
        yield all([
            fork(BaseSaga),
            fork(AccountSaga),
            fork(AuthSaga),
            fork(ContestSaga),
            fork(CourseSaga),
            fork(LeagueSaga),
            fork(ModalSaga),
            fork(NotificationSaga),
            fork(ScoreSaga),
            fork(SocketSaga),
            fork(TopicSocketSaga),
            fork(LeaguePageSaga),
        ]);
    }
    sagaMiddleware.run(memberAppSaga);

    store.subscribe(() => {
        const state = store.getState();
        saveState({
            auth: _get(state, ['auth'], {}),
            base: _get(state, ['base'], {}),
            notification: _get(state, ['notification'], {}),
        });
    });
    return { store };
}

export default configStore;
