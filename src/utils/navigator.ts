const navigator = (history: any, path: string, state?: any) => {
    history.location.pathname == path
        ? history.replace(path, state)
        : history.push(path, state);
};

export default navigator;
