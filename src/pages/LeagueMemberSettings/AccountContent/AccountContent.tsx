import React from 'react';
import { useSelector } from 'react-redux';
import { ContentLayoutContent } from '@layouts';
import LeagueMemberSettings from './LeagueMemberSettings';
import { LeagueMemberSettingsContentProps } from './types';
import { selectData } from '../selector';

const LeagueMemberSettingsContent: React.FunctionComponent<LeagueMemberSettingsContentProps> = ({}) => {
    const { isInitialized } = useSelector(selectData);
    return (
        <ContentLayoutContent showSpinner={!isInitialized}>
            <LeagueMemberSettings />
        </ContentLayoutContent>
    );
};

export default LeagueMemberSettingsContent;
