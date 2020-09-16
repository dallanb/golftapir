const withTargetDispatch = (dispatchAction: any, target: any) => async (
    dispatch: any
) => {
    const targetedDispatch = (action: any) => {
        const updatedAction = action;
        updatedAction.target = target;

        return dispatch(updatedAction);
    };

    return dispatchAction(targetedDispatch);
};

const withTarget = (actionCreator: any, target: any) => (...args: any) => {
    const result = actionCreator.apply(this, args);
    if (typeof result === 'object') {
        result.target = target;
        return result;
    } else if (typeof result === 'function') {
        return withTargetDispatch(result, target);
    }

    return result;
};

export default withTarget;
