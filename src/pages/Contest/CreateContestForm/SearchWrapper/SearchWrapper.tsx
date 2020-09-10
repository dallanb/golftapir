import React from 'react';
import { Form, Tag } from 'antd';
import _ from 'lodash';
import memo from 'memoize-one';
import { SearchWrapperProps } from './types';
import './SearchWrapper.scss';

class SearchWrapper extends React.PureComponent<SearchWrapperProps> {
    handleCloseTag = (e: Event) => {
        console.log(e);
    };

    generateTags = memo((vals: any[]) =>
        vals.map((val: any) => {
            val = JSON.parse(val);
            return (
                <Tag key={val.uuid} closable onClose={this.handleCloseTag}>
                    {`${val.first_name} ${val.last_name}`}
                </Tag>
            );
        })
    );

    render() {
        const { children, formik, childRef, ...restProps } = this.props;
        return (
            <>
                <Form.Item {...restProps}>{children}</Form.Item>
                {this.generateTags(
                    _.get(formik, ['values', restProps.name], [])
                )}
            </>
        );
    }
}

export default SearchWrapper;
