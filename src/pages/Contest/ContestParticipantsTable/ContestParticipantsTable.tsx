import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import {
    ContestParticipantsTableProps,
    ContestParticipantsTableState,
} from './types';
import Grid from '@components/Grid';
import { columnsSchema } from './schema';
import { StateInterface } from '../types';
import './ContestParticipantsTable.scss';

class ContestParticipantsTable extends React.PureComponent<
    ContestParticipantsTableProps,
    ContestParticipantsTableState
> {
    state = {
        scrollState: { rowIndex: 0, columnIndex: 0 },
    };

    loadMore = (start: number, stop: number, resolve: () => void) => resolve();

    setScrollRowAndColumn = (rowIndex: number, columnIndex: number) => {
        this.setState({
            scrollState: { rowIndex, columnIndex },
        });
    };

    render() {
        const { data, isFetching } = this.props;
        const { scrollState } = this.state;
        return (
            <div>
                <Grid
                    hasNextPage={false}
                    loadMoreItems={this.loadMore}
                    isItemLoading={isFetching}
                    scrollState={scrollState}
                    setScrollRowAndColumn={this.setScrollRowAndColumn}
                    itemCount={data.length}
                    items={data}
                    columnsSchema={columnsSchema}
                    columnWidth={100}
                    rowHeight={40}
                    columnCount={columnsSchema.length}
                    height={100}
                    rowCount={data.length}
                    width={300}
                />
            </div>
        );
    }
}

const mapStateToProps = ({ contestPage }: StateInterface) => {
    const {
        data: { account },
    } = contestPage;
    return {
        data: account.data,
        isFetching: false,
    };
};

export default connect(mapStateToProps)(ContestParticipantsTable);
