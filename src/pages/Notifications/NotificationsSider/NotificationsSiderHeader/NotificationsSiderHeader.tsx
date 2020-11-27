import React from 'react';
import { useSelector } from 'react-redux';
import SiderLayoutHeader from '@layouts/SiderLayout/SiderLayoutHeader';
import { selectMyAvatarSrc, selectMyName } from '@selectors/BaseSelector';
import { NotificationsSiderHeaderProps } from './types';

const NotificationsSiderHeader: React.FunctionComponent<NotificationsSiderHeaderProps> = () => {
    const title = useSelector(selectMyName);
    const avatar = {
        name: useSelector(selectMyName),
        src: useSelector(selectMyAvatarSrc),
        size: 48,
    };
    return <SiderLayoutHeader title={title} avatar={avatar} />;
};

export default NotificationsSiderHeader;
