import React from 'react';
import { useSelector } from 'react-redux';
import { ContentLayout, ContentLayoutContent } from '@layouts';
import Contests from './Contests';
import { ContestsContentProps } from './types';
import { selectData } from '../selector';
import './ContestsContent.less';

const ContestsContent: React.FunctionComponent<ContestsContentProps> = ({}) => {
    const { isInitialized } = useSelector(selectData);
    return (
        <ContentLayoutContent
            showSpinner={!isInitialized}
        >
            <Contests />
        </ContentLayoutContent>
    );
};

export default ContestsContent;
