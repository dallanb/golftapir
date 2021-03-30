import React, { useState } from 'react';
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
import { ResizeContext, StoreContext } from '@contexts';

const App: React.FunctionComponent = () => {
    const [store, setStore] = useState({});
    const { ref, height, width } = useResizeDetector();
    return (
        <div id="app" ref={ref}>
            <ResizeContext.Provider value={{ height, width }}>
                <StoreContext.Provider value={{ store, setStore }}>
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
                </StoreContext.Provider>
            </ResizeContext.Provider>
        </div>
    );
};

export default App;
