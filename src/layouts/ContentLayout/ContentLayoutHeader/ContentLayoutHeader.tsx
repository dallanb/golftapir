import React from 'react';
import { PageHeader } from 'antd';
import { ContentLayoutHeaderProps } from './types';
import { AvatarProps } from 'antd/lib/avatar';
import { getInitials, randomColourGenerator } from '@utils';

const ContentLayoutHeader: React.FunctionComponent<ContentLayoutHeaderProps> = ({
    title,
    subTitle,
    avatar,
    tags,
    extra,
}) => {
    const renderAvatar = (avatar: ContentLayoutHeaderProps['avatar']) => {
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
            subTitle={subTitle}
            avatar={avatar && renderAvatar(avatar)}
            tags={tags}
            extra={extra}
            className="content-layout-header"
        />
    );
};

export default ContentLayoutHeader;
