import React from 'react';
import { ContentLayoutSider } from '@layouts';
import { ContestsSiderProps } from './types';
import ContestsSiderHeader from './ContestsSiderHeader';
import ContestsSiderContent from './ContestsSiderContent';
import './ContestsSider.scss';

const ContestsSider: React.FunctionComponent<ContestsSiderProps> = () => {
    return (
        <ContentLayoutSider
            header={<ContestsSiderHeader />}
            content={<ContestsSiderContent />}
        />
    );
};

export default ContestsSider;
