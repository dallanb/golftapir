import React from 'react';
import { NestedInputWrapperProps } from './types';
import './NestedInputWrapper.less';

class NestedInputWrapper extends React.PureComponent<NestedInputWrapperProps> {
    render() {
        const { children, ...restProps } = this.props;
        return <div {...restProps}>{children}</div>;
    }
}

export default NestedInputWrapper;
