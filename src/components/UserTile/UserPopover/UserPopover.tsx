import React from 'react';
import { Popover } from 'antd';
import { UserPopoverProps } from './types';
import './UserPopover.less';

const UserPopover: React.FunctionComponent<UserPopoverProps> = ({
    title,
    content,
    trigger,
    children,
}) => {
    console.log('HERE');
    return (
        <Popover title={title} content={content} trigger={trigger}>
            {children}
        </Popover>
    );
};

export default UserPopover;
