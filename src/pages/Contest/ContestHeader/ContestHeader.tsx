import React from 'react';
import { useSelector } from 'react-redux';
import {
    selectContestName,
    selectContestAvatarSrc,
} from '@pages/Contest/selector';
import { ContestHeaderProps } from './types';
import HeaderTitle from './HeaderTitle';
import HeaderSubTitle from './HeaderSubTitle';
import HeaderExtra from './HeaderExtra';
import { ContentLayoutHeader } from '@layouts';
import './ContestHeader.scss';

const ContestHeader: React.FunctionComponent<ContestHeaderProps> = () => {
    const title = <HeaderTitle />;
    const subTitle = <HeaderSubTitle />;
    const extra = <HeaderExtra />;
    const avatar = {
        name: useSelector(selectContestName),
        src: useSelector(selectContestAvatarSrc),
        size: 72,
    };

    return (
        <ContentLayoutHeader
            title={title}
            subTitle={subTitle}
            extra={extra}
            avatar={avatar}
        />
    );
};

export default ContestHeader;
