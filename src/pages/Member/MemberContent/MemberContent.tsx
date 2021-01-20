import React from 'react';
import { useSelector } from 'react-redux';
import { ContentLayoutContent } from '@layouts';
import { MemberContentProps } from './types';
import MemberResults from './MemberResults';
import MemberInfo from './MemberInfo';
import CONSTANTS from '@locale/en-CA';
import { selectData } from '../selector';
import './MemberContent.less';
import ComponentContent from '@layouts/ComponentContent';

const MemberContent: React.FunctionComponent<MemberContentProps> = ({}) => {
    const { isInitialized } = useSelector(selectData);

    return (
        <ContentLayoutContent showSpinner={!isInitialized}>
            <>
                <MemberInfo />
                <MemberResults />
            </>
        </ContentLayoutContent>
    );
};

export default MemberContent;
