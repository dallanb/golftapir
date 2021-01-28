import React from 'react';
import { ComponentContentProps } from './types';
import { Layout, Spin } from 'antd';
import './ComponentContent.less';

const { Content } = Layout;

const ComponentContent: React.FunctionComponent<ComponentContentProps> = ({
    showSpinner,
    title,
    children,
    componentRef,
    className,
    style,
}) => {
    const renderTitle = () => {
        if (title) {
            return <div className="component-content-title">{title}</div>;
        }
    };
    const renderComponent = () => {
        if (showSpinner) {
            return <Spin />;
        }
        return children;
    };

    return (
        <div className="component-content">
            {renderTitle()}
            <div
                ref={componentRef}
                className={`component-content-content ${className}`}
                style={style}
            >
                {renderComponent()}
            </div>
        </div>
    );
};

export default ComponentContent;
