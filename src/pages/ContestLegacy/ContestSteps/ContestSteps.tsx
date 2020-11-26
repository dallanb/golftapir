import React from 'react';
import { useSelector } from 'react-redux';
import { Steps } from 'antd';
import { ContestActionsProps } from './types';
import { selectContestStatus } from '../selector';
import constants from '@constants';
import CONSTANTS from '@locale/en-CA';
import './ContestSteps.scss';

const { Step } = Steps;

const ContestSteps: React.FunctionComponent<ContestActionsProps> = () => {
    const status = useSelector(selectContestStatus);

    const getCurrentStep = () => {
        let step = 0;
        switch (status) {
            case constants.STATUS.PENDING.KEY:
                break;
            case constants.STATUS.READY.KEY:
                step = 1;
                break;
            case constants.STATUS.ACTIVE.KEY:
                step = 2;
                break;
            case constants.STATUS.COMPLETED.KEY:
                step = 3;
                break;
        }
        return step;
    };

    return (
        <div className="contest-steps">
            <Steps
                progressDot
                direction="horizontal"
                size="small"
                current={getCurrentStep()}
            >
                <Step
                    title={CONSTANTS.PAGES.CONTEST.STEPS.PENDING.TITLE}
                    // description={
                    //     CONSTANTS.PAGES.CONTEST.STEPS.PENDING.DESCRIPTION
                    // }
                />
                <Step
                    title={CONSTANTS.PAGES.CONTEST.STEPS.READY.TITLE}
                    // description={
                    //     CONSTANTS.PAGES.CONTEST.STEPS.READY.DESCRIPTION
                    // }
                />
                <Step
                    title={CONSTANTS.PAGES.CONTEST.STEPS.ACTIVE.TITLE}
                    // description={
                    //     CONSTANTS.PAGES.CONTEST.STEPS.ACTIVE.DESCRIPTION
                    // }
                />
                <Step
                    title={CONSTANTS.PAGES.CONTEST.STEPS.COMPLETE.TITLE}
                    // description={
                    //     CONSTANTS.PAGES.CONTEST.STEPS.COMPLETE.DESCRIPTION
                    // }
                />
            </Steps>
        </div>
    );
};

export default ContestSteps;
