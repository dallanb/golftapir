import React from 'react';
import { useSelector } from 'react-redux';
import { Steps } from 'antd';
import { ContestActionsProps } from './types';
import { selectContestStatus } from '../../selector';
import './ContestSiderSteps.scss';
import constants from '@constants';
import CONSTANTS from '@locale/en-CA';

const { Step } = Steps;

const ContestSiderSteps: React.FunctionComponent<ContestActionsProps> = () => {
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
        <div className="contest-sider-steps">
            <Steps
                progressDot
                direction="vertical"
                size="small"
                current={getCurrentStep()}
            >
                <Step
                    title={CONSTANTS.PAGES.CONTEST.STEPS.PENDING.TITLE}
                    description={
                        CONSTANTS.PAGES.CONTEST.STEPS.PENDING.DESCRIPTION
                    }
                />
                <Step
                    title={CONSTANTS.PAGES.CONTEST.STEPS.READY.TITLE}
                    description={
                        CONSTANTS.PAGES.CONTEST.STEPS.READY.DESCRIPTION
                    }
                />
                <Step
                    title={CONSTANTS.PAGES.CONTEST.STEPS.ACTIVE.TITLE}
                    description={
                        CONSTANTS.PAGES.CONTEST.STEPS.ACTIVE.DESCRIPTION
                    }
                />
                <Step
                    title={CONSTANTS.PAGES.CONTEST.STEPS.COMPLETE.TITLE}
                    description={
                        CONSTANTS.PAGES.CONTEST.STEPS.COMPLETE.DESCRIPTION
                    }
                />
            </Steps>
        </div>
    );
};

export default ContestSiderSteps;
