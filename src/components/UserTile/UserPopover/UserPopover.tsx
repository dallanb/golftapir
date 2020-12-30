import React from 'react';
import { Popover } from 'antd';
import { UserPopoverProps } from './types';
import './UserPopover.less';

const UserPopover: React.FunctionComponent<UserPopoverProps> = ({
    title,
    content,
    trigger,
    children,
    className,
    overlayClassName,
}) => {
    return (
        <Popover
            title={title}
            content={content}
            trigger={trigger}
            className={className}
            overlayClassName={overlayClassName}
        >
            {children}
        </Popover>
    );
};

export default UserPopover;
