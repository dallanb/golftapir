import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ContestActiveProps } from './types';
import ContestScorecard from './ContestScorecard';
import ContestButtons from './ContestButtons';
import './ContestActive.less';
import ContestPageSiderContentParticipantActiveContestActiveActions from './actions';
import { selectData } from './selector';
import ComponentContent from '@layouts/ComponentContent';

const ContestActive: React.FunctionComponent<ContestActiveProps> = () => {
    const dispatch = useDispatch();
    const { isInitialized } = useSelector(selectData);
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
            <ContestScorecard isInitialized={isInitialized} />
            <ComponentContent
                showSpinner={!isInitialized}
                className="contest-buttons"
            >
                <ContestButtons />
            </ComponentContent>
        </>
    );
};

export default ContestActive;
