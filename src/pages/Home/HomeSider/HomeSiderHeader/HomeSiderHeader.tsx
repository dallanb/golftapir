import React from 'react';
import SiderLayoutHeader from '@layouts/SiderLayout/SiderLayoutHeader';
import { useSelector } from 'react-redux';
import { selectMyAvatarSrc, selectMyName } from '@selectors/BaseSelector';
import { HomeSiderHeaderProps } from './types';

const HomeSiderHeader: React.FunctionComponent<HomeSiderHeaderProps> = () => {
    const title = useSelector(selectMyName);
    const avatar = {
        name: useSelector(selectMyName),
        src: useSelector(selectMyAvatarSrc),
        size: 48,
    };
    return <SiderLayoutHeader title={title} avatar={avatar} />;
};

export default HomeSiderHeader;
