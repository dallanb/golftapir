import { applyMiddleware, compose, createStore, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { all, fork } from 'redux-saga/effects';
import { createLogger } from 'redux-logger';
import { authReducer as auth, baseReducer as base } from '@reducers';
import {
    forgotPasswordPage,
    ForgotPasswordPageSaga,
    loginPage,
    LoginPageSaga,
    logoutPage,
    LogoutPageSaga,
    registerPage,
    RegisterPageSaga,
    resetPasswordPage,
    ResetPasswordPageSaga,
    verifyPage,
    VerifyPageSaga,
} from '@pages';
import { AuthSaga } from '@sagas';
import { get as _get } from 'lodash';

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
            auth,
            base,
            forgotPasswordPage,
            loginPage,
            logoutPage,
            registerPage,
            resetPasswordPage,
            verifyPage,
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
            fork(AuthSaga),
            fork(ForgotPasswordPageSaga),
            fork(LoginPageSaga),
            fork(LogoutPageSaga),
            fork(RegisterPageSaga),
            fork(ResetPasswordPageSaga),
            fork(VerifyPageSaga),
        ]);
    }
    sagaMiddleware.run(memberAppSaga);

    return { store };
}

export default configStore;
