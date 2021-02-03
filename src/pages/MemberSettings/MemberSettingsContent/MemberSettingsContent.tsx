import React from 'react';
import { ContentLayoutContent } from '@layouts';
import Member from './Member';
import { MemberSettingsContentProps } from './types';

const MemberSettingsContent: React.FunctionComponent<MemberSettingsContentProps> = ({}) => {
    return (
        <ContentLayoutContent>
            <Member />
        </ContentLayoutContent>
    );
};

export default MemberSettingsContent;
