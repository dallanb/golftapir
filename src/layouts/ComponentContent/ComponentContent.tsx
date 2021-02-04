import React from 'react';
import classnames from 'classnames';
import { get as _get } from 'lodash';
import { ComponentContentProps } from './types';
import { Spin } from 'antd';
import './ComponentContent.less';

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
    const renderComponent = (showSpin?: boolean) => {
        if (showSpin) {
            return <Spin />;
        }

        return children;
    };
    const cx = classnames('component-content', className);
    const bodyCx = classnames('component-content-content', bodyClassName, {
        spin: showSpinner,
    });

    return (
        <div className={cx} style={style}>
            {renderTitle()}
            <div ref={componentRef} className={bodyCx} style={bodyStyle}>
                {renderComponent(showSpinner)}
            </div>
        </div>
    );
};

export default ComponentContent;
