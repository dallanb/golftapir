import React from 'react';
import { useSelector } from 'react-redux';
import { get as _get } from 'lodash';
import SiderLayoutHeader from '@layouts/SiderLayout/SiderLayoutHeader';
import { selectMeData, selectMyAvatarSrc } from '@selectors/BaseSelector';
import HeaderTitle from './HeaderTitle';
import HeaderExtra from './HeaderExtra';
import { UserTileProps } from './types';
import { AvatarProps } from '@components/Avatar/types';
import './UserTile.less';

const UserTile: React.FunctionComponent<UserTileProps> = () => {
    const user = useSelector(selectMeData);
    const title = <HeaderTitle />;
    const avatar: AvatarProps = {
        name: _get(user, ['display_name'], ''),
        src: useSelector(selectMyAvatarSrc),
        shape: 'square',
        size: 48,
        className: 'user-tile-avatar',
    };
    const extra = <HeaderExtra user={user} />;
    return <SiderLayoutHeader title={title} avatar={avatar} extra={extra} />;
};

export default UserTile;
