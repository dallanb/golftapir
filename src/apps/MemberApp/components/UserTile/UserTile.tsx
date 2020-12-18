import React from 'react';
import { useSelector } from 'react-redux';
import SiderLayoutHeader from '@layouts/SiderLayout/SiderLayoutHeader';
import { selectMyAvatarSrc, selectMyName } from '@selectors/BaseSelector';
import HeaderTitle from './HeaderTitle';
import HeaderExtra from './HeaderExtra';
import { UserTileProps } from './types';

const UserTile: React.FunctionComponent<UserTileProps> = () => {
    const title = <HeaderTitle />;
    const avatar = {
        name: useSelector(selectMyName),
        src: useSelector(selectMyAvatarSrc),
        size: 48,
    };
    const extra = <HeaderExtra />;
    return <SiderLayoutHeader title={title} avatar={avatar} extra={extra} />;
};

export default UserTile;
