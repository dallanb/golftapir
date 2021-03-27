import React, { useContext } from 'react';
import { Layout } from 'antd';
import { get as _get } from 'lodash';
import { AppLayoutContentProps } from './types';
import { ResizeContext } from '@contexts';
import { ContentLayout } from '@layouts';
import AppLayoutSider from '../AppLayoutSider';
import './AppLayoutContent.less';

const AppLayoutContent: React.FunctionComponent<AppLayoutContentProps> = ({
    header,
    content,
    sider,
    showSpinner,
    className,
}) => {
    const dimensions = useContext(ResizeContext);

    const renderHeader = () => {
        if (!header) {
            return null;
        }
        return header;
    };

    const renderContent = () => {
        const res = [];
        const width = _get(dimensions, ['width'], 0);
        if (content) {
            res.push(content);
        }
        if (width < 992 && sider) {
            res.push(sider);
        }
        return res;
    };

    const renderSider = () => {
        if (!sider) {
            return null;
        }
        return <AppLayoutSider content={sider} />;
    };
    return (
        <Layout className="content-layout">
            <Layout className="content-layout-body content-layout-background">
                <ContentLayout
                    className={className}
                    content={renderContent()}
                    header={renderHeader()}
                    showSpinner={showSpinner}
                />
                {renderSider()}
            </Layout>
        </Layout>
    );
};

export default AppLayoutContent;
