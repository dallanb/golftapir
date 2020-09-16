import React from 'react';
import { connect } from 'react-redux';
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
        const { items, isFetching } = this.props;
        const { scrollState } = this.state;
        return (
            <div>
                <Grid
                    hasNextPage={false}
                    loadMoreItems={this.loadMore}
                    isItemLoading={isFetching}
                    scrollState={scrollState}
                    setScrollRowAndColumn={this.setScrollRowAndColumn}
                    itemCount={items.length}
                    items={items}
                    columnsSchema={columnsSchema}
                    columnWidth={100}
                    rowHeight={40}
                    columnCount={columnsSchema.length}
                    height={100}
                    rowCount={items.length}
                    width={400}
                />
            </div>
        );
    }
}

const mapStateToProps = ({ contestPage }: StateInterface) => {
    const {
        ui: { contestParticipants },
    } = contestPage;
    return {
        items: contestParticipants,
        isFetching: false,
    };
};

export default connect(mapStateToProps)(ContestParticipantsTable);
