import React from 'react';
import { PageHeader, Spin } from 'antd';
import { SiderLayoutHeaderProps } from './types';
import { AvatarProps } from 'antd/lib/avatar';
import { getInitials, randomColourGenerator } from '@utils';
import classnames from 'classnames';

const SiderLayoutHeader: React.FunctionComponent<SiderLayoutHeaderProps> = ({
    title,
    subTitle,
    avatar,
    extra,
    className,
    showSpinner,
}) => {
    const cx = classnames('sider-layout-header', className);
    const renderAvatar = (avatar: SiderLayoutHeaderProps['avatar']) => {
        if (!avatar) {
            return undefined;
        }
        const avatarProps: AvatarProps = {
            className: avatar.className,
            size: avatar.size,
            shape: avatar.shape,
        };
        if (avatar.src) {
            avatarProps['src'] = avatar.src;
        } else {
            avatarProps['style'] = {
                backgroundColor: randomColourGenerator(avatar.name),
                verticalAlign: 'middle',
            };
            avatarProps['children'] = getInitials(avatar.name);
        }
        return avatarProps;
    };
    if (showSpinner) return <Spin className={cx} />;
    return (
        <PageHeader
            title={title}
            subTitle={subTitle}
            avatar={avatar && renderAvatar(avatar)}
            extra={extra}
            className={cx}
        />
    );
};

export default SiderLayoutHeader;
