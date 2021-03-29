import { applyMiddleware, compose, createStore, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { all, fork } from 'redux-saga/effects';
import { createLogger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import {
    authReducer as auth,
    baseReducer as base,
    modalReducer as modal,
    spinnerReducer as spinner,
} from '@reducers';
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
import { AuthSaga, ModalSaga, SpinnerSaga } from '@sagas';
import { get as _get } from 'lodash';

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
            auth,
            base,
            modal,
            spinner,
            forgotPasswordPage,
            loginPage,
            logoutPage,
            registerPage,
            resetPasswordPage,
            verifyPage,
        }),
        _get(options, ['preloadedState'], {}),
        composeWithDevTools(...enhancers)
    );

    function* memberAppSaga() {
        yield all([
            fork(AuthSaga),
            fork(ModalSaga),
            fork(SpinnerSaga),
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
