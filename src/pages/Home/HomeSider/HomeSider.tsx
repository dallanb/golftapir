import React from 'react';
import { ContentLayoutSider } from '@layouts';
import HomeSiderHeader from './HomeSiderHeader';
import HomeSiderContent from './HomeSiderContent';
import { HomeSiderProps } from './types';

const HomeSider: React.FunctionComponent<HomeSiderProps> = () => {
    return (
        <ContentLayoutSider
            header={<HomeSiderHeader />}
            content={<HomeSiderContent />}
        />
    );
};

export default HomeSider;
