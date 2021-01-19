import React from 'react';
import { Badge } from 'antd';
import { PendingBadgeProps } from './types';
import './PendingBadge.less';

const PendingBadge: React.FunctionComponent<PendingBadgeProps> = ({
    value: { pending },
    icon: Icon,
}) => {
    return (
        <Badge size={'small'} count={pending}>
            <Icon />
        </Badge>
    );
};

export default PendingBadge;
