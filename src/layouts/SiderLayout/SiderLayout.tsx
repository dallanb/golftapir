import React from 'react';
import { Layout, PageHeader, Spin } from 'antd';
import { AvatarProps } from 'antd/lib/avatar';
import { getInitials, randomColourGenerator } from '@utils';
import { SiderLayoutProps } from './types';
import './SiderLayout.scss';

const { Sider } = Layout;

const SiderLayout: React.FunctionComponent<SiderLayoutProps> = ({
    showSpinner,
    children,
    title,
    avatar,
    className,
}) => {
    const renderHeader = () => {
        return (
            <PageHeader
                title={title}
                avatar={avatar && renderAvatar(avatar)}
                className="sider-layout-header"
            />
        );
    };

    const renderContent = () => {
        if (showSpinner) {
            return <Spin />;
        }
        return children;
    };

    const renderAvatar = (avatar: SiderLayoutProps['avatar']) => {
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
        <Sider width={300} className={`sider-layout ${className}`}>
            <div className="sider-layout-background">
                {renderHeader()}
                {renderContent()}
            </div>
        </Sider>
    );
};

export default SiderLayout;
