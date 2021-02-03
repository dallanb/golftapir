import React from 'react';
import { useSelector } from 'react-redux';
import { get as _get } from 'lodash';
import { selectMe, selectMyAvatarSrc } from '@selectors/BaseSelector';
import UserTileExtra from './UserTileExtra';
import { UserTileProps } from './types';
import ComponentContent from '@layouts/ComponentContent';
import { Avatar } from '@components';
import './UserTile.less';

const UserTile: React.FunctionComponent<UserTileProps> = () => {
    const { data: user, isInitialized } = useSelector(selectMe);
    const displayName = _get(user, ['display_name'], '');
    const username = _get(user, ['username'], '');
    const src = useSelector(selectMyAvatarSrc);
    return (
        <ComponentContent
            className="user-tile-component-content"
            showSpinner={!isInitialized}
        >
            <div className="user-tile-main">
                <div className="user-tile-avatar-wrapper">
                    <Avatar
                        name={displayName}
                        src={src}
                        shape={'square'}
                        size={48}
                        className="user-tile-avatar"
                    />
                </div>
                <div className="user-tile-user">
                    <div className="user-tile-user-name">{displayName}</div>
                    <div className="user-tile-user-username">{username}</div>
                </div>
            </div>
            <div className="user-tile-side">
                <UserTileExtra user={user} />
            </div>
        </ComponentContent>
    );
};

export default UserTile;
