import { applyMiddleware, compose, createStore, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { all, fork } from 'redux-saga/effects';
import { createLogger } from 'redux-logger';
import { get as _get } from 'lodash';
import { reducer as memberApp } from '@apps/MemberApp/reducer';
import {
    authReducer as auth,
    baseReducer as base,
    modalReducer as modal,
    notificationReducer as notification,
} from '@reducers';
import {
    accountPage,
    AccountPageContentAccountSaga,
    AccountPageSaga,
    homePage,
    HomePageSaga,
    leaguesCreatePage,
    LeaguesCreatePageContentLeagueSaga,
    LeaguesCreatePageContentLeagueSearchMemberSaga,
    LeaguesCreatePageSaga,
    logoutPage,
    LogoutPageSaga,
    notificationsPage,
    NotificationsPageContentNotificationsSaga,
    NotificationsPageSaga,
} from '@pages';
import { default as BaseSaga } from '@apps/MemberApp/saga';
import {
    AccountSaga,
    AuthSaga,
    CourseSaga,
    LeagueSaga,
    MemberSaga,
    ModalSaga,
    NotificationSaga,
    ScoreSaga,
    SocketSaga,
    TopicSocketSaga,
} from '@sagas';

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
            memberApp,
            accountPage,
            homePage,
            leaguesCreatePage,
            logoutPage,
            notificationsPage,
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
            fork(CourseSaga),
            fork(LeagueSaga),
            fork(MemberSaga),
            fork(ModalSaga),
            fork(NotificationSaga),
            fork(ScoreSaga),
            fork(SocketSaga),
            fork(TopicSocketSaga),
            fork(AccountPageSaga),
            fork(AccountPageContentAccountSaga),
            fork(HomePageSaga),
            fork(LeaguesCreatePageSaga),
            fork(LeaguesCreatePageContentLeagueSaga),
            fork(LeaguesCreatePageContentLeagueSearchMemberSaga),
            fork(LogoutPageSaga),
            fork(NotificationsPageSaga),
            fork(NotificationsPageContentNotificationsSaga),
        ]);
    }
    sagaMiddleware.run(memberAppSaga);

    return { store };
}

export default configStore;
