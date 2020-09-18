import React from 'react';
import { Popover } from 'antd';
import { UserPopoverProps } from './types';
import './UserPopover.scss';

const UserPopover: React.FunctionComponent<UserPopoverProps> = ({
    title,
    content,
    trigger,
    children,
}) => {
    return (
        <Popover title={title} content={content} trigger={trigger}>
            {children}
        </Popover>
    );
};

export default UserPopover;
