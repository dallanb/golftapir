import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ComponentContent from '@layouts/ComponentContent';
import { ContestActiveProps } from './types';
import ContestScorecard from './ContestScorecard';
import ContestButtons from './ContestButtons';
import { selectData } from './selector';
import './ContestActive.scss';
import ContestPageSiderContentParticipantActiveContestActiveActions from './actions';

const ContestActive: React.FunctionComponent<ContestActiveProps> = () => {
    const dispatch = useDispatch();
    // Possibly move this out to participant active
    useEffect(() => {
        dispatch(
            ContestPageSiderContentParticipantActiveContestActiveActions.init()
        );
        return () => {
            dispatch(
                ContestPageSiderContentParticipantActiveContestActiveActions.terminate()
            );
        };
    }, []);
    return (
        <>
            <ContestScorecard />
            <ContestButtons />
        </>
    );
};

export default ContestActive;
