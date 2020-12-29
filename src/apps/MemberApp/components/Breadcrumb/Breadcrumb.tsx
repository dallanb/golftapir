import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Breadcrumb as AntdBreadcrumb } from 'antd';
import { get as _get } from 'lodash';
import { BreadcrumbProps } from './types';
import { getRouteBreadcrumb } from '@utils';
import routes from '@constants/routes';
import './Breadcrumb.less';
import { HomeFilled } from '@ant-design/icons/lib';

const Breadcrumb: React.FunctionComponent<BreadcrumbProps> = (props) => {
    const { state, location } = props;
    const pathSnippets = location.pathname.split('/').filter((i) => i);
    const breadcrumbItems = pathSnippets.map((_, index) => {
        const url = `/${pathSnippets.slice(0, index + 1).join('/')}`;
        const { key, label, icon: Icon } = getRouteBreadcrumb(url);
        return (
            <AntdBreadcrumb.Item key={url}>
                <Link
                    to={{
                        pathname: url,
                        state: _get(state, [key], {}),
                    }}
                >
                    {Icon && <Icon className="breadcrumb-key-icon" />}
                    <span className="breadcrumb-key-name">{label}</span>
                </Link>
            </AntdBreadcrumb.Item>
        );
    });

    return (
        <AntdBreadcrumb className="breadcrumb">
            {breadcrumbItems}
        </AntdBreadcrumb>
    );
};

export default withRouter(Breadcrumb);
