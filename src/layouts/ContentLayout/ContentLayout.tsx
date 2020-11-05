import React from 'react';
import { Layout, PageHeader, Spin } from 'antd';
import { AvatarProps } from 'antd/lib/avatar';
import { getInitials, randomColourGenerator } from '@utils';
import { ContentLayoutProps } from './types';
import './ContentLayout.scss';

const { Content, Footer } = Layout;

const ContentLayout: React.FunctionComponent<ContentLayoutProps> = ({
    showSpinner,
    children,
    title,
    subTitle,
    className,
    tags,
    extra,
    avatar,
}) => {
    const renderContent = () => {
        if (showSpinner) {
            return <Spin />;
        }
        return children;
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
            <Content className="content-layout-content">
                <div className="content-layout-background">
                    {title && (
                        <PageHeader
                            title={title}
                            subTitle={subTitle}
                            tags={tags}
                            extra={extra}
                            avatar={renderAvatar(avatar)}
                        />
                    )}
                    <div className={`content-layout-children ${className}`}>
                        {renderContent()}
                    </div>
                </div>
            </Content>
            <Footer className="footer">
                Tech Tapir ©2020 Created by Dallan Bhatti
            </Footer>
        </Layout>
    );
};

export default ContentLayout;
