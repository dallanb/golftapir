import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Breadcrumb as AntdBreadcrumb } from 'antd';
import { BreadcrumbProps } from './types';
import './Breadcrumb.less';
import { getRouteBreadcrumb } from '@utils';
import constants from '@constants';

const Breadcrumb: React.FunctionComponent<BreadcrumbProps> = (props) => {
    const { location } = props;
    const pathSnippets = location.pathname
        .split('/')
        .filter((i) => i && i !== 'app');
    const extraBreadcrumbItems = pathSnippets.map((_, index) => {
        const url = `/app/${pathSnippets.slice(0, index + 1).join('/')}`;
        return (
            <AntdBreadcrumb.Item key={url}>
                <Link to={url}>{getRouteBreadcrumb(url)}</Link>
            </AntdBreadcrumb.Item>
        );
    });
    const breadcrumbItems = [
        <AntdBreadcrumb.Item key={constants.ROUTES.HOME.ROUTE}>
            <Link to={`/app${constants.ROUTES.HOME.ROUTE}`}>
                {constants.ROUTES.HOME.KEY}
            </Link>
        </AntdBreadcrumb.Item>,
    ].concat(extraBreadcrumbItems);

    return <AntdBreadcrumb>{breadcrumbItems}</AntdBreadcrumb>;
};

export default withRouter(Breadcrumb);
