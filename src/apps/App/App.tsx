import React from 'react';
import {
    BrowserRouter as Router,
    Redirect,
    Route,
    Switch,
} from 'react-router-dom';
import { useResizeDetector } from 'react-resize-detector';
import { routes } from './routes';
import { ResizeContext } from '@contexts';
import WebSocketProvider from './WebSocket';
import './App.less';
import '../../assets/styles/global.less';
import { useNetworkDetector } from '@utils';
import { notification } from 'antd';

const App: React.FunctionComponent = () => {
    const { ref, height, width } = useResizeDetector();
    const isDisconnected = useNetworkDetector();
    isDisconnected
        ? notification.error({
              message: 'Internet connection lost...',
              duration: 0,
              placement: 'bottomRight',
          })
        : notification.close('network');
    return (
        <div id="app" ref={ref}>
            <ResizeContext.Provider value={{ height, width }}>
                <WebSocketProvider>
                    <Router>
                        <Switch>
                            {routes.map(({ path, render }: any) => (
                                <Route key={path} path={path} render={render} />
                            ))}
                            <Route>
                                <Redirect to="/app" />
                            </Route>
                        </Switch>
                    </Router>
                </WebSocketProvider>
            </ResizeContext.Provider>
        </div>
    );
};

export default App;
