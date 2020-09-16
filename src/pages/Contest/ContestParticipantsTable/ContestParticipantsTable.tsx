import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { Spin } from 'antd';
import {
    ContestParticipantsTableProps,
    ContestParticipantsTableState,
} from './types';
import Grid from '@components/Grid';
import { columnsSchema } from '@pages/Contest/ContestParticipantsTable/schema';
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
        console.log(this.props);
        const { scrollState } = this.state;
        return (
            <div>
                C'est un table
                <Grid
                    hasNextPage={false}
                    loadMoreItems={this.loadMore}
                    isItemLoading={isFetching}
                    scrollState={scrollState}
                    setScrollRowAndColumn={this.setScrollRowAndColumn}
                    itemCount={data.length}
                    items={data}
                    columnsSchema={columnsSchema}
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
