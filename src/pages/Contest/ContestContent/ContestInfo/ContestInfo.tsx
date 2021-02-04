import React, { useRef } from 'react';
import { useSelector } from 'react-redux';
import { ContestInfoProps } from './types';
import ContestInfoForm from './ContestInfoForm';
import ComponentContent from '@layouts/ComponentContent';
import CONSTANTS from '@locale/en-CA';
import {
    selectIsInitialized,
    selectIsRefreshing,
} from '@pages/Contest/selector';
import './ContestInfo.less';

const ContestInfo: React.FunctionComponent<ContestInfoProps> = () => {
    const ref = useRef(null);
    const isInitialized = useSelector(selectIsInitialized);
    const isRefreshing = useSelector(selectIsRefreshing);
    return (
        <ComponentContent
            componentRef={ref}
            showSpinner={!isInitialized || isRefreshing}
            className="contest-info-component-content"
            title={CONSTANTS.PAGES.CONTEST.INFO}
        >
            <ContestInfoForm />
        </ComponentContent>
    );
};

export default ContestInfo;
