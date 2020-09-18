import React from 'react';
import { Card } from 'antd';
import { Avatar } from '@components';
import { withS3URL } from '@utils';
import { UserCardProps } from './types';
import './UserCard.scss';

const UserCard: React.FunctionComponent<UserCardProps> = ({ name, avatar }) => {
    return (
        <div className="user-card">
            <Avatar src={avatar && withS3URL(avatar)} name={name} />
            {name}
        </div>
    );
};

export default UserCard;
