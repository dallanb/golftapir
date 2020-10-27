import React from 'react';
import { connect } from 'react-redux';
import { Typography } from 'antd';
import { get as _get } from 'lodash';
import { ContestLeadersTableProps } from './types';
import { columnsSchema } from './schema';
import { StateInterface } from '../types';
import { Table } from '@components';
import './ContestLeadersTable.scss';

class ContestLeadersTable extends React.PureComponent<
    ContestLeadersTableProps
> {
    loadMore = (start: number, stop: number, resolve: () => void) => resolve();

    render() {
        const { items, isFetching } = this.props;
        return (
            <div className="contest-leaders-table">
                <Typography.Title level={5}>Leaders</Typography.Title>
                <Table
                    size={75}
                    height={150}
                    width={300}
                    items={items}
                    hasNextPage={false}
                    loadNextPage={this.loadMore}
                    isNextPageLoading={isFetching}
                    minimumBatchSize={100}
                    columnsSchema={columnsSchema}
                />
            </div>
        );
    }
}

const mapStateToProps = ({ contestPage }: StateInterface) => {
    const items = _get(contestPage, ['score', 'sheet'], []);
    return {
        items,
        isFetching: false,
    };
};

export default connect(mapStateToProps)(ContestLeadersTable);
