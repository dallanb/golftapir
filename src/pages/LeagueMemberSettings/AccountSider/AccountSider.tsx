import React from 'react';
import { ContentLayoutSider } from '@layouts';
import LeagueMemberSettingsSiderHeader from './LeagueMemberSettingsSiderHeader';
import LeagueMemberSettingsSiderContent from './LeagueMemberSettingsSiderContent';
import { LeagueMemberSettingsSiderProps } from './types';

const LeagueMemberSettingsSider: React.FunctionComponent<LeagueMemberSettingsSiderProps> = () => {
    return (
        <ContentLayoutSider
            header={<LeagueMemberSettingsSiderHeader />}
            content={<LeagueMemberSettingsSiderContent />}
        />
    );
};

export default LeagueMemberSettingsSider;
