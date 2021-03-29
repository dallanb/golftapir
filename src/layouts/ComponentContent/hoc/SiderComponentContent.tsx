import React from 'react';
import ComponentContent from '../ComponentContent';
import classnames from 'classnames';

const withSider: any = (WrappedComponent: any) => {
    return ({ className, ...props }: any) => {
        const cx = classnames(className, 'sider-component-content');
        return <WrappedComponent className={cx} {...props} />;
    };
};

export default withSider(ComponentContent);
