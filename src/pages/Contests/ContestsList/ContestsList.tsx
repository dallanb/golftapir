import React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { ContestsListProps } from './types';
import { List } from '@components';
import ContestActions, {
    ContestInterface,
} from '@reducers/data/ContestReducer';
import ContestsListTile from './ContestsListTile';
import './ContestsList.scss';
import { ContestPageInterface } from '@reducers/ui/ContestPageReducer';

class ContestsList extends React.PureComponent<ContestsListProps> {
    loadMore = (start: number, stop: number, resolve: () => any) => {
        const { fetchContests } = this.props;
        fetchContests({ page: Math.floor(stop / 100) + 1, per_page: 100 });
        resolve();
    };

    render() {
        const { metadata, data, isFetching } = this.props;
        return (
            <List
                size={150}
                items={data}
                hasNextPage={
                    metadata.page * metadata.per_page < metadata.total_count
                }
                loadNextPage={this.loadMore}
                isNextPageLoading={isFetching}
                minimumBatchSize={100}
                rowRenderer={ContestsListTile}
            />
        );
    }
}

const mapStateToProps = ({
    contestsPage,
}: {
    contestsPage: { ui: ContestPageInterface; data: ContestInterface };
}) => {
    return {
        metadata: _.get(contestsPage, ['data', 'metadata'], 0),
        data: _.get(contestsPage, ['data', 'data'], []),
        isFetching: _.get(contestsPage, ['data', 'isFetching'], false),
    };
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        fetchContests(options: any) {
            return dispatch(ContestActions.fetchContests(options, true));
        },
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(ContestsList);
