import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Breadcrumb as AntdBreadcrumb } from 'antd';
import { get as _get } from 'lodash';
import { BreadcrumbProps } from './types';
import { getRouteBreadcrumb, withDynamicRoute } from '@utils';
import './Breadcrumb.less';

const Breadcrumb: React.FunctionComponent<BreadcrumbProps> = (props) => {
    const { state, params, location } = props;
    const pathSnippets = location.pathname
        .replace(
            /\b[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}\b/,
            ':uuid'
        )
        .split('/')
        .filter((i) => i);
    const breadcrumbItems = pathSnippets.reduce(
        (accum: any, snippet: string, index) => {
            const url = `/${pathSnippets.slice(0, index + 1).join('/')}`;
            const { key, label, icon: Icon } = getRouteBreadcrumb(url);
            if (snippet.startsWith(':')) {
                accum.pop();
            }
            accum.push(
                <AntdBreadcrumb.Item key={url}>
                    <Link
                        to={{
                            pathname: withDynamicRoute(
                                url,
                                _get(params, [key], {})
                            ),
                            state: _get(state, [key], {}),
                        }}
                    >
                        {Icon && <Icon className="breadcrumb-key-icon" />}
                        <span className="breadcrumb-key-name">{label}</span>
                    </Link>
                </AntdBreadcrumb.Item>
            );
            return accum;
        },
        []
    );

    return (
        <AntdBreadcrumb className="breadcrumb">
            {breadcrumbItems}
        </AntdBreadcrumb>
    );
};

export default withRouter(Breadcrumb);
