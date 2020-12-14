import React from 'react';
import { Badge } from 'antd';
import { PendingBadgeProps } from './types';
import './PendingBadge.less';

const PendingBadge: React.FunctionComponent<PendingBadgeProps> = ({
    value: { pending },
    icon: Icon,
}) => {
    return (
        <Badge dot={pending > 0}>
            <Icon />
        </Badge>
    );
};

export default PendingBadge;
