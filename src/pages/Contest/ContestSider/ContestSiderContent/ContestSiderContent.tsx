import React from 'react';
import { useSelector } from 'react-redux';
import SiderLayoutContent from '@layouts/SiderLayout/SiderLayoutContent';
import ParticipantActive from './ParticipantActive';
import ParticipantPending from './ParticipantPending';
import ParticipantCompleted from './ParticipantCompleted';
import ParticipantSpectator from './ParticipantSpectator';
import ContestStart from './ContestStart';
import Course from './Course';
import { ContestSiderContentProps } from './types';
import { selectData, selectMyParticipantStatus } from '@pages/Contest/selector';
import constants from '@constants';
import ComponentContent from '@layouts/ComponentContent';

const ContestSiderContent: React.FunctionComponent<ContestSiderContentProps> = ({}) => {
    const { isInitialized } = useSelector(selectData);
    const participantStatus = useSelector(selectMyParticipantStatus);
    const contentRenderer = (status: string) => {
        switch (status) {
            case constants.STATUS.PENDING.KEY:
                return <ParticipantPending />;
            case constants.STATUS.ACTIVE.KEY:
                return <ParticipantActive />;
            case constants.STATUS.COMPLETED.KEY:
                return <ParticipantCompleted />;
            default:
                return <ParticipantSpectator />;
        }
    };
    return (
        <SiderLayoutContent showSpinner={!isInitialized}>
            <>
                <ComponentContent className="contest-start-component-content">
                    <ContestStart />
                </ComponentContent>
                <Course />
                {contentRenderer(participantStatus)}
            </>
        </SiderLayoutContent>
    );
};

export default ContestSiderContent;
