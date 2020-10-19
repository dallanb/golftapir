import React from 'react';
import { connect } from 'react-redux';
import { ContestParticipantsTableProps } from './types';
import { columnsSchema } from './schema';
import { StateInterface } from '../types';
import { Table } from '@components';
import './ContestParticipantsTable.scss';
import { Typography } from 'antd';

class ContestParticipantsTable extends React.PureComponent<
    ContestParticipantsTableProps
> {
    loadMore = (start: number, stop: number, resolve: () => void) => resolve();

    render() {
        const { items, isFetching } = this.props;
        return (
            <div>
                <Typography.Title level={5}>Participants</Typography.Title>
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
    const { contestParticipants: items } = contestPage;
    return {
        items,
        isFetching: false,
    };
};

export default connect(mapStateToProps)(ContestParticipantsTable);
