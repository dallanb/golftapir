import React from 'react';
import { ContentLayoutSider } from '@layouts';
import MemberSettingsSiderHeader from './MemberSettingsSiderHeader';
import MemberSettingsSiderContent from './MemberSettingsSiderContent';
import { MemberSettingsSiderProps } from './types';

const MemberSettingsSider: React.FunctionComponent<MemberSettingsSiderProps> = () => {
    return (
        <ContentLayoutSider
            header={<MemberSettingsSiderHeader />}
            content={<MemberSettingsSiderContent />}
        />
    );
};

export default MemberSettingsSider;
