import React from 'react';
import { Card } from 'antd';
import { Avatar } from '@components';
import { withS3URL } from '@utils';
import { UserCardProps } from './types';
import './UserCard.less';

const UserCard: React.FunctionComponent<UserCardProps> = ({ name, avatar }) => {
    return (
        <div className="user-card">
            <div className="user-card-avatar">
                <Avatar src={avatar && withS3URL(avatar)} name={name} />
            </div>
            <div className="user-card-name">{name}</div>
        </div>
    );
};

export default UserCard;
