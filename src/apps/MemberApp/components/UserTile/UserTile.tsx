import React from 'react';
import { useSelector } from 'react-redux';
import SiderLayoutHeader from '@layouts/SiderLayout/SiderLayoutHeader';
import {
    selectMe,
    selectMyAvatarSrc,
    selectMyDisplayName,
} from '@selectors/BaseSelector';
import HeaderTitle from './HeaderTitle';
import HeaderExtra from './HeaderExtra';
import { UserTileProps } from './types';

const UserTile: React.FunctionComponent<UserTileProps> = () => {
    const user = useSelector(selectMe);
    const title = <HeaderTitle />;
    const avatar = {
        name: user.display_name,
        src: useSelector(selectMyAvatarSrc),
        size: 48,
    };
    const extra = <HeaderExtra user={user} />;
    return <SiderLayoutHeader title={title} avatar={avatar} extra={extra} />;
};

export default UserTile;
