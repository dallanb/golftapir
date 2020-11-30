import React from 'react';
import { ContentLayoutSider } from '@layouts';
import ContestsCreateSiderHeader from './ContestsCreateSiderHeader';
import ContestsCreateSiderContent from './ContestsCreateSiderContent';
import { ContestsCreateSiderProps } from './types';

const ContestsCreateSider: React.FunctionComponent<ContestsCreateSiderProps> = () => {
    return (
        <ContentLayoutSider
            header={<ContestsCreateSiderHeader />}
            content={<ContestsCreateSiderContent />}
        />
    );
};

export default ContestsCreateSider;
