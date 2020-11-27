import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ContestsList from './ContestsList';
import { ContestsProps } from './types';
import ContestsPageContentContestsActions from './actions';
import { selectData } from './selector';
import ComponentContent from '@layouts/ComponentContent';
import './Contests.scss';

const Contests: React.FunctionComponent<ContestsProps> = ({}) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(ContestsPageContentContestsActions.init());
        return () => {
            dispatch(ContestsPageContentContestsActions.terminate());
        };
    }, []);

    const { isInitialized } = useSelector(selectData);

    return (
        <ComponentContent showSpinner={!isInitialized} className="contests">
            <ContestsList />
        </ComponentContent>
    );
};

export default Contests;
