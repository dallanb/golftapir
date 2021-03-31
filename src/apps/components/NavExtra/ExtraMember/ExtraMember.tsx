import React from 'react';
import { useSelector } from 'react-redux';
import { get as _get } from 'lodash';
import { selectMe, selectMyAvatarSrc } from '@selectors/BaseSelector';
import { Avatar } from '@components';
import ExtraMemberSkeleton from './ExtraMemberSkeleton';
import { ExtraMemberProps } from './types';
import './ExtraMember.less';

const ExtraMember: React.FunctionComponent<ExtraMemberProps> = ({}) => {
    const { data: user, isInitialized = false } = useSelector(selectMe);
    const displayName = _get(user, ['display_name'], '');
    const username = _get(user, ['username'], '');
    const src = useSelector(selectMyAvatarSrc);

    if (!isInitialized) {
        return <ExtraMemberSkeleton />;
    }
    return (
        <div className="nav-extra-user">
            <div className="nav-extra-user-avatar-wrapper">
                <Avatar
                    name={displayName}
                    src={src}
                    shape={'square'}
                    size={36}
                    className="nav-extra-user-avatar"
                    border
                />
            </div>
            <div className="nav-extra-user-name">
                <div className="nav-extra-user-name-display-name">
                    {displayName}
                </div>
                <div className="nav-extra-user-name-username">{username}</div>
            </div>
        </div>
    );
};

export default ExtraMember;
