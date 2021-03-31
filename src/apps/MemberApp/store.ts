import { applyMiddleware, compose, createStore, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { all, fork } from 'redux-saga/effects';
import { createLogger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import { get as _get } from 'lodash';
import { reducer as app } from '@apps/MemberApp/reducer';
import {
    authReducer as auth,
    baseReducer as base,
    modalReducer as modal,
    notificationReducer as notification,
    spinnerReducer as spinner,
} from '@reducers';
import {
    accountPage,
    AccountPageContentAccountSaga,
    AccountPageSaga,
    homePage,
    HomePageSaga,
    leaguesCreatePage,
    LeaguesCreatePageContentLeagueSaga,
    // LeaguesCreatePageContentLeagueSearchMemberSaga,
    LeaguesCreatePageSaga,
    logoutPage,
    LogoutPageSaga,
    notificationsPage,
    NotificationsPageContentNotificationsSaga,
    NotificationsPageSaga,
} from '@pages';
import { default as MemberAppSaga } from '@apps/MemberApp/saga';
import {
    AccountSaga,
    BaseSaga,
    AuthSaga,
    CourseSaga,
    LeagueSaga,
    MemberSaga,
    ModalSaga,
    NotificationSaga,
    ScoreSaga,
    SocketSaga,
    SpinnerSaga,
} from '@sagas';

function configStore(options?: { preloadedState: any }): any {
    const middleware = [];
    const enhancers = [];
    let monitor = undefined;

    /* ------------- Assemble Middleware ------------- */
    if (process.env.NODE_ENV === 'development') {
        monitor = (window as any).__SAGA_MONITOR_EXTENSION__;
        const loggerMiddleware = createLogger({
            collapsed: true,
        });
        middleware.push(loggerMiddleware);
    }

    const sagaMiddleware = createSagaMiddleware({ sagaMonitor: monitor });
    middleware.push(sagaMiddleware);

    enhancers.push(applyMiddleware(...middleware));

    const store = createStore(
        combineReducers({
            base,
            app,
            auth,
            modal,
            notification,
            spinner,
            accountPage,
            homePage,
            leaguesCreatePage,
            logoutPage,
            notificationsPage,
        }),
        _get(options, ['preloadedState'], {}),
        composeWithDevTools(...enhancers)
    );

    function* AppSaga() {
        yield all([
            fork(BaseSaga),
            fork(MemberAppSaga),
            fork(AccountSaga),
            fork(AuthSaga),
            fork(CourseSaga),
            fork(LeagueSaga),
            fork(MemberSaga),
            fork(ModalSaga),
            fork(NotificationSaga),
            fork(ScoreSaga),
            fork(SocketSaga),
            fork(SpinnerSaga),
            fork(AccountPageSaga),
            fork(AccountPageContentAccountSaga),
            fork(HomePageSaga),
            fork(LeaguesCreatePageSaga),
            fork(LeaguesCreatePageContentLeagueSaga),
            // fork(LeaguesCreatePageContentLeagueSearchMemberSaga),
            fork(LogoutPageSaga),
            fork(NotificationsPageSaga),
            fork(NotificationsPageContentNotificationsSaga),
        ]);
    }
    sagaMiddleware.run(AppSaga);

    return store;
}

export default configStore;
