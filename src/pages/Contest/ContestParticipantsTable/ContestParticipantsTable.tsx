import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import {
    ContestParticipantsTableProps,
    ContestParticipantsTableState,
} from './types';
import Grid from '@components/Grid';
import './ContestParticipantsTable.scss';
import { columnsSchema } from '@pages/Contest/ContestParticipantsTable/schema';
import { Spin } from 'antd';

class ContestParticipantsTable extends React.PureComponent<
    ContestParticipantsTableProps,
    ContestParticipantsTableState
> {
    state = {
        scrollState: { rowIndex: 0, columnIndex: 0 },
    };

    loadMore = (start: number, stop: number, resolve: () => void) => {
        const { data, fetchContestParticipants } = this.props;
        fetchContestParticipants(data.uuid);
        resolve();
    };

    setScrollRowAndColumn = (rowIndex: number, columnIndex: number) => {
        this.setState({
            scrollState: { rowIndex, columnIndex },
        });
    };

    render() {
        const { data, isFetching } = this.props;
        const { scrollState } = this.state;
        if (!data.participants) return <Spin />;
        return (
            <div>
                C'est un table
                <Grid
                    hasNextPage={false}
                    loadMoreItems={this.loadMore}
                    isItemLoading={isFetching}
                    scrollState={scrollState}
                    setScrollRowAndColumn={this.setScrollRowAndColumn}
                    itemCount={data.participants.length}
                    items={data.participants}
                    columnsSchema={columnsSchema}
                />
            </div>
        );
    }
}

const mapStateToProps = ({ contest }: any) => {
    return {};
};

export default connect(mapStateToProps)(ContestParticipantsTable);
