import { createBrowserHistory } from 'history';

export const history = createBrowserHistory();

export const navigateTo = (loc: string) => {
    history.push(loc);
};
