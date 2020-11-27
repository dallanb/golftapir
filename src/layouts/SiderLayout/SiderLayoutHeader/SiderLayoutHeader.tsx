import React from 'react';
import { PageHeader, Spin } from 'antd';
import { SiderLayoutHeaderProps } from './types';
import { AvatarProps } from 'antd/lib/avatar';
import { getInitials, randomColourGenerator } from '@utils';

const SiderLayoutHeader: React.FunctionComponent<SiderLayoutHeaderProps> = ({
    title,
    avatar,
    showSpinner,
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

    if (showSpinner) {
        return <Spin />;
    }

    return (
        <PageHeader
            title={title}
            avatar={avatar && renderAvatar(avatar)}
            className="sider-layout-header"
        />
    );
};

export default SiderLayoutHeader;
