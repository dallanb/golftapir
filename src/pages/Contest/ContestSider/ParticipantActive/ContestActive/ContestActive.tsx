import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { ContestActiveProps } from './types';
import ContestScorecard from './ContestScorecard';
import ContestButtons from './ContestButtons';
import './ContestActive.less';
import ContestPageSiderParticipantActiveContestActiveActions from './actions';

const ContestActive: React.FunctionComponent<ContestActiveProps> = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(ContestPageSiderParticipantActiveContestActiveActions.init());
        return () => {
            dispatch(
                ContestPageSiderParticipantActiveContestActiveActions.terminate()
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
