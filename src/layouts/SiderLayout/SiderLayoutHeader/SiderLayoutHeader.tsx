import React from 'react';
import { PageHeader } from 'antd';
import { SiderLayoutHeaderProps } from './types';
import { AvatarProps } from 'antd/lib/avatar';
import { getInitials, randomColourGenerator } from '@utils';

const SiderLayoutHeader: React.FunctionComponent<SiderLayoutHeaderProps> = ({
    title,
    avatar,
}) => {
    const renderAvatar = (avatar: SiderLayoutHeaderProps['avatar']) => {
        if (!avatar) {
            return undefined;
        }
        const avatarProps: AvatarProps = {
            className: avatar.className,
            size: avatar.size,
        };
        if (avatar.src) {
            avatarProps['src'] = avatar.src;
        } else {
            avatarProps['style'] = {
                backgroundColor: randomColourGenerator(),
                verticalAlign: 'middle',
            };
            avatarProps['children'] = getInitials(avatar.name);
        }
        return avatarProps;
    };

    return (
        <PageHeader
            title={title}
            avatar={avatar && renderAvatar(avatar)}
            className="sider-layout-header"
        />
    );
};

export default SiderLayoutHeader;
