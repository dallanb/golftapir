import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Breadcrumb as AntdBreadcrumb } from 'antd';
import { get as _get } from 'lodash';
import { BreadcrumbProps } from './types';
import { getRouteBreadcrumb, withDynamicRoute } from '@utils';
import './Breadcrumb.less';

const Breadcrumb: React.FunctionComponent<BreadcrumbProps> = (props) => {
    const { state, params, match, route } = props;
    const appPath = match.path.replace(route, ''); // use this to render the home button
    const pathSnippets = route.split('/').filter((snippet) => snippet);
    const breadcrumbItems = pathSnippets.reduce(
        (accum: any, snippet: string, index: number) => {
            const url = `/${pathSnippets.slice(0, index + 1).join('/')}`;
            const { key, label, icon: Icon } = getRouteBreadcrumb(url);
            accum.push(
                <AntdBreadcrumb.Item key={url}>
                    <Link
                        to={{
                            pathname: withDynamicRoute(
                                `${appPath}${url}`,
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
