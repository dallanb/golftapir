import { applyMiddleware, compose, createStore, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { all, fork } from 'redux-saga/effects';
import { createLogger } from 'redux-logger';
import { authReducer as auth } from '@reducers';
import {
    loginPage,
    LoginPageSaga,
    logoutPage,
    LogoutPageSaga,
    registerPage,
    RegisterPageSaga,
} from '@pages';
import { AuthSaga } from '@sagas';

function configStore(): any {
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
            auth,
            loginPage,
            logoutPage,
            registerPage,
        }),
        undefined,
        compose(
            ...enhancers,
            (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
                (window as any).__REDUX_DEVTOOLS_EXTENSION__()
        )
    );

    function* memberAppSaga() {
        yield all([
            fork(AuthSaga),
            fork(LoginPageSaga),
            fork(LogoutPageSaga),
            fork(RegisterPageSaga),
        ]);
    }
    sagaMiddleware.run(memberAppSaga);

    return { store };
}

const { store } = configStore();

export { store };

export default configStore;
