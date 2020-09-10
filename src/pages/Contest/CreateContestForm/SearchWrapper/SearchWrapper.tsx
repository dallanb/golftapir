import React from 'react';
import { SearchWrapperProps } from './types';
import './SearchWrapper.scss';
import { Form } from 'antd';

class SearchWrapper extends React.PureComponent<SearchWrapperProps> {
    render() {
        const { children, childRef, onKeyDown, ...restProps } = this.props;
        console.log(childRef);
        return <Form.Item {...restProps}>{children}</Form.Item>;
    }
}

export default SearchWrapper;
