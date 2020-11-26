import React from 'react';
import { connect } from 'react-redux';
import { ContestWagersTableProps } from './types';
import { columnsSchema } from './schema';
import { StateInterface } from '../types';
import { Table } from '@components';
import './ContestWagersTable.scss';

class ContestWagersTable extends React.PureComponent<ContestWagersTableProps> {
    loadMore = (start: number, stop: number, resolve: () => void) => resolve();

    render() {
        const { items, isFetching } = this.props;
        return (
            <div>
                <Table
                    size={150}
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
    const { contestWagers: items } = contestPage;
    return {
        items,
        isFetching: false,
    };
};

export default connect(mapStateToProps)(ContestWagersTable);
