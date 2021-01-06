import React from 'react';
import { useSelector } from 'react-redux';
import { ContentLayoutContent } from '@layouts';
import Member from './Member';
import { MemberSettingsContentProps } from './types';
import { selectData } from '../selector';

const MemberSettingsContent: React.FunctionComponent<MemberSettingsContentProps> = ({}) => {
    const { isInitialized } = useSelector(selectData);
    return (
        <ContentLayoutContent showSpinner={!isInitialized}>
            <Member />
        </ContentLayoutContent>
    );
};

export default MemberSettingsContent;
