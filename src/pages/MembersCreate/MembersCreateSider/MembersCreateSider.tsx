import React from 'react';
import { ContentLayoutSider } from '@layouts';
import MembersCreateSiderHeader from './MembersCreateSiderHeader';
import MembersCreateSiderContent from './MembersCreateSiderContent';
import { MembersCreateSiderProps } from './types';

const MembersCreateSider: React.FunctionComponent<MembersCreateSiderProps> = () => {
    return (
        <ContentLayoutSider
            header={<MembersCreateSiderHeader />}
            content={<MembersCreateSiderContent />}
        />
    );
};

export default MembersCreateSider;
