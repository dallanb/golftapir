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
    style,
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
            style={style}
        >
            {renderComponent()}
        </div>
        //</Content>
    );
};

export default ComponentContent;
