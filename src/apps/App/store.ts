import { applyMiddleware, compose, createStore, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { createLogger } from 'redux-logger';
import { memberAppReducer, memberAppSaga } from '../MemberApp';

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
        memberAppReducer,
        undefined,
        compose(
            ...enhancers,
            (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
                (window as any).__REDUX_DEVTOOLS_EXTENSION__()
        )
    );

    sagaMiddleware.run(memberAppSaga);

    return { store };
}

const { store } = configStore();

export { store };

export default configStore;
