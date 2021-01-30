import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { ContestActiveProps } from './types';
import ContestScorecard from './ContestScorecard';
import ContestButtons from './ContestButtons';
import './ContestActive.less';
import ContestPageSiderContentParticipantActiveContestActiveActions from './actions';

const ContestActive: React.FunctionComponent<ContestActiveProps> = () => {
    const dispatch = useDispatch();

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
