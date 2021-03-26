import React from 'react';
import {
    BrowserRouter as Router,
    Redirect,
    Route,
    Switch,
} from 'react-router-dom';
import { routes } from './routes';
import './App.less';
import '../../assets/styles/global.less';
import { useResizeDetector } from 'react-resize-detector';
import { ResizeContext } from '@contexts';

const App: React.FunctionComponent = () => {
    const { ref, height, width } = useResizeDetector();
    return (
        <div id="app" ref={ref}>
            <ResizeContext.Provider value={{ height, width }}>
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
            </ResizeContext.Provider>
        </div>
    );
};

export default App;
