import React, { useRef } from 'react';
import { useSelector } from 'react-redux';
import { SettingOutlined } from '@ant-design/icons';
import { ContestInfoProps } from './types';
import ContestInfoForm from './ContestInfoForm';
import ComponentContent from '@layouts/ComponentContent';
import CONSTANTS from '@locale/en-CA';
import {
    selectIsInitialized,
    selectIsRefreshing,
    selectPayoutIsFetching,
} from '@pages/Contest/selector';
import './ContestInfo.less';
import ContestInfoExtra from '@pages/Contest/ContestContent/ContestInfo/ContestInfoExtra';

const ContestInfo: React.FunctionComponent<ContestInfoProps> = () => {
    const ref = useRef(null);
    const isInitialized = useSelector(selectIsInitialized);
    const payoutIsFetching = useSelector(selectPayoutIsFetching);
    const isRefreshing = useSelector(selectIsRefreshing);
    return (
        <ComponentContent
            componentRef={ref}
            showSpinner={!isInitialized || payoutIsFetching || isRefreshing}
            className="contest-info-component-content"
            title={CONSTANTS.PAGES.CONTEST.INFO}
            extra={<ContestInfoExtra />}
        >
            <ContestInfoForm />
        </ComponentContent>
    );
};

export default ContestInfo;
