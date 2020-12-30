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

class App extends React.Component {
    render() {
        return (
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
        );
    }
}

export default App;
