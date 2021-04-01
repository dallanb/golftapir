import React, { useEffect } from 'react';
import { SpinnerActions } from '@actions';
import { useDispatch } from 'react-redux';

let timer: ReturnType<typeof setTimeout>;
const useSpinner: any = (
    showSpinner: boolean,
    message?: string,
    timeout?: number,
    timeoutCb?: () => void
) => {
    const dispatch = useDispatch();
    useEffect(() => {
        if (showSpinner) {
            dispatch(SpinnerActions.openSpinner(message));
            if (timeout) {
                timer = setTimeout(() => {
                    if (timeoutCb) {
                        timeoutCb();
                    }
                }, timeout);
            }
        } else {
            clearTimeout(timer);
            dispatch(SpinnerActions.closeSpinner());
        }
    }, [showSpinner]);
};

export default useSpinner;
