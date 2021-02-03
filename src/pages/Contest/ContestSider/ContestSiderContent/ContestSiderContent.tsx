import React from 'react';
import { useSelector } from 'react-redux';
import { Spin } from 'antd';
import SiderLayoutContent from '@layouts/SiderLayout/SiderLayoutContent';
import ParticipantActive from './ParticipantActive';
import ParticipantPending from './ParticipantPending';
import ParticipantCompleted from './ParticipantCompleted';
import ParticipantSpectator from './ParticipantSpectator';
import Course from './Course';
import PayoutProportions from './PayoutProportions';
import { ContestSiderContentProps } from './types';
import {
    selectIsInitialized,
    selectMyParticipantStatus,
} from '@pages/Contest/selector';
import constants from '@constants';
import './ContestSiderContent.less';
import ComponentContent from '@layouts/ComponentContent';

const ContestSiderContent: React.FunctionComponent<ContestSiderContentProps> = ({}) => {
    const participantStatus = useSelector(selectMyParticipantStatus);
    const isInitialized = useSelector(selectIsInitialized);
    const contentRenderer = (status: string) => {
        switch (status) {
            case constants.STATUS.PENDING.KEY:
                return <ParticipantPending />;
            case constants.STATUS.ACTIVE.KEY:
                return <ParticipantActive />;
            case constants.STATUS.COMPLETED.KEY:
                return <ParticipantCompleted />;
            default:
                return isInitialized ? (
                    <ParticipantSpectator />
                ) : (
                    <ComponentContent className="space" showSpinner={true} />
                );
        }
    };
    return (
        <SiderLayoutContent>
            <>
                <PayoutProportions />
                <Course />
                {contentRenderer(participantStatus)}
            </>
        </SiderLayoutContent>
    );
};

export default ContestSiderContent;
