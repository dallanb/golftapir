import React from 'react';
import { ContestSiderActiveProps } from './types';
import ContestScorecard from './ContestScorecard';
import ContestButtons from './ContestButtons';
import { useSelector } from 'react-redux';
import { Spin } from 'antd';
import { selectSheet } from '@pages/Contest/selector';
import './ContestSiderActive.scss';

const ContestSiderActive: React.FunctionComponent<ContestSiderActiveProps> = () => {
    const sheet = useSelector(selectSheet);
    if (!sheet) {
        return <Spin />;
    }
    return (
        <>
            <ContestScorecard />
            <ContestButtons />
        </>
    );
};

export default ContestSiderActive;
