import React from 'react';
import { ComponentContentProps } from './types';
import { Layout, Spin } from 'antd';
import './ComponentContent.scss';

const { Content } = Layout;

const ComponentContent: React.FunctionComponent<ComponentContentProps> = ({
    showSpinner,
    children,
    componentRef,
    className,
}) => {
    const renderComponent = () => {
        if (showSpinner) {
            return <Spin />;
        }
        return children;
    };

    return (
        // <Content className={`component-CompetitorContent-CompetitorContent`}>
        <div
            ref={componentRef}
            className={`component-content-content ${className}`}
        >
            {renderComponent()}
        </div>
        //</Content>
    );
};

export default ComponentContent;
