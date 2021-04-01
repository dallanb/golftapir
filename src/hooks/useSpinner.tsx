import React, { useEffect } from 'react';
import { SpinnerActions } from '@actions';
import { useDispatch } from 'react-redux';

const useSpinner: any = (showSpinner: boolean, message?: string) => {
    const dispatch = useDispatch();
    useEffect(() => {
        if (showSpinner) {
            dispatch(SpinnerActions.openSpinner(message));
        } else {
            dispatch(SpinnerActions.closeSpinner());
        }
    }, [showSpinner]);
};

export default useSpinner;
