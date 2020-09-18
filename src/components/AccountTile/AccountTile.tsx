import React from 'react';
import { Card } from 'antd';
import { Avatar } from '@components';
import { withS3URL } from '@utils';
import { AccountTileProps } from './types';
import './AccountTile.scss';

const AccountTile: React.FunctionComponent<AccountTileProps> = ({
    name,
    avatar,
}) => {
    return (
        <Card>
            <Avatar src={avatar && withS3URL(avatar)} name={name} />
            {name}
        </Card>
    );
};

export default AccountTile;
