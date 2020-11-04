import React from 'react';
import { Provider } from 'react-redux';
import {
    BrowserRouter as Router,
    Redirect,
    Route,
    Switch,
} from 'react-router-dom';
import { store } from './store';
import MessageModal from '@components/MessageModal/MessageModal';
import { routes } from './routes';
import './App.scss';
import '../../assets/styles/global.scss';

class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <Router>
                    <MessageModal />
                    <Switch>
                        {routes.map(({ path, render }: any) => (
                            <Route key={path} path={path} render={render} />
                        ))}
                        <Route>
                            <Redirect to="/app" />
                        </Route>
                    </Switch>
                </Router>
            </Provider>
        );
    }
}

export default App;
