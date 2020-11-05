import React from 'react';
import { Layout, PageHeader, Spin } from 'antd';
import { AvatarProps } from 'antd/lib/avatar';
import { set as _set } from 'lodash';
import { getInitials, randomColourGenerator } from '@utils';
import { ContentLayoutProps } from './types';
import './ContentLayout.scss';

const { Content, Sider, Footer } = Layout;

const ContentLayout: React.FunctionComponent<ContentLayoutProps> = ({
    showSpinner,
    children,
    title,
    subTitle,
    className,
    tags,
    extra,
    avatar,
    sider,
}) => {
    const renderHeader = () => {
        return (
            <PageHeader
                title={title}
                subTitle={subTitle}
                avatar={avatar && renderAvatar(avatar)}
                tags={tags}
                extra={extra}
            />
        );
    };

    const renderContent = () => {
        if (showSpinner) {
            return <Spin />;
        }
        return children;
    };

    const renderSider = () => {
        if (!sider) {
            return null;
        }
        return (
            <Sider className="content-layout-content secondary">
                <div className="content-layout-background">{sider}</div>
            </Sider>
        );
    };

    const renderAvatar = (avatar: ContentLayoutProps['avatar']) => {
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
        <Layout className="content-layout">
            <Layout className="content-layout">
                <Content className="content-layout-content">
                    <div className="content-layout-background">
                        {renderHeader()}
                        <div className={`content-layout-children ${className}`}>
                            {renderContent()}
                        </div>
                    </div>
                </Content>
                {renderSider()}
            </Layout>
            <Footer className="footer">
                Tech Tapir ©2020 Created by Dallan Bhatti
            </Footer>
        </Layout>
    );
};

export default ContentLayout;
