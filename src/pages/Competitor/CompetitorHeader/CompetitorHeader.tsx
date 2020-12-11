import React from 'react';
import { useSelector } from 'react-redux';
import {
    selectAccountAvatarSrc,
    selectAccountName,
} from '@pages/Competitor/selector';
import { CompetitorHeaderProps } from './types';
import { ContentLayoutHeader } from '@layouts';
import CONSTANTS from '@locale/en-CA';
import './CompetitorHeader.less';

const CompetitorHeader: React.FunctionComponent<CompetitorHeaderProps> = () => {
    const title = useSelector(selectAccountName);
    const subTitle = CONSTANTS.PAGES.COMPETITOR.DESCRIPTION;
    const avatar = {
        name: title,
        src: useSelector(selectAccountAvatarSrc),
        size: 72,
    };
    return (
        <ContentLayoutHeader
            title={title}
            subTitle={subTitle}
            avatar={avatar}
        />
    );
};

export default CompetitorHeader;
