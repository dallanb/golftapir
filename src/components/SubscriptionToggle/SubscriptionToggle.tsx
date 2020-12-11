import React from 'react';
import { SubscriptionToggleProps } from './types';
import './SubscriptionToggle.less';
import { Button } from 'antd';

const SubscriptionToggle: React.FunctionComponent<SubscriptionToggleProps> = ({
    checked,
    icon,
    className,
    onClick,
}) => {
    return (
        <Button
            onClick={onClick}
            className={className}
            type="text"
            icon={icon}
        />
    );
};

export default SubscriptionToggle;
