import React from 'react';
import classnames from 'classnames';
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
    bodyClassName,
    style,
    bodyStyle,
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
    const cx = classnames('component-content', className);
    const bodyCx = classnames('component-content-content', bodyClassName);
    return (
        <div className={cx} style={style}>
            {renderTitle()}
            <div ref={componentRef} className={bodyCx} style={bodyStyle}>
                {renderComponent()}
            </div>
        </div>
    );
};

export default ComponentContent;
