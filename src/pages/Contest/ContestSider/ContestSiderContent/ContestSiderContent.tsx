import React from 'react';
import SiderLayoutContent from '@layouts/SiderLayout/SiderLayoutContent';
import ParticipantActive from './ParticipantActive';
import ParticipantPending from './ParticipantPending';
import ParticipantSpectator from './ParticipantSpectator';
import ContestStart from './ContestStart';
import { ContestSiderContentProps } from './types';
import { useSelector } from 'react-redux';
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
                {contentRenderer(participantStatus)}
            </>
        </SiderLayoutContent>
    );
};

export default ContestSiderContent;
