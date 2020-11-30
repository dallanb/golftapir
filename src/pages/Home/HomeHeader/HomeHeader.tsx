import React from 'react';
import { useSelector } from 'react-redux';
import { HomeHeaderProps } from './types';
import { ContentLayoutHeader } from '@layouts';
import CONSTANTS from '@locale/en-CA';
import { selectMyAvatarSrc, selectMyName } from '@selectors/BaseSelector';

const HomeHeader: React.FunctionComponent<HomeHeaderProps> = () => {
    const title = useSelector(selectMyName);
    const subTitle = CONSTANTS.PAGES.HOME.DESCRIPTION;
    const avatar = {
        name: title,
        src: useSelector(selectMyAvatarSrc),
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

export default HomeHeader;
