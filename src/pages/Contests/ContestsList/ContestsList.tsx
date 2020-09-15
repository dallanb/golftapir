import React from 'react';
import { connect } from 'react-redux';
import { ContestsListProps, StateInterface } from './types';
import { List } from '@components';
import { withTarget } from '@utils';
import constants from '@constants';
import ContestActions from '@reducers/ContestReducer';
import ContestsListTile from './ContestsListTile';
import './ContestsList.scss';

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

const mapStateToProps = ({ contestsPage }: StateInterface) => {
    const {
        data: { contest },
    } = contestsPage;
    return {
        metadata: contest.metadata,
        data: contest.data,
        isFetching: contest.isFetching,
    };
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        fetchContests(options: any) {
            return dispatch(
                withTarget(
                    ContestActions.fetchContests,
                    constants.TARGETS.CONTESTS_PAGE
                )(options, true)
            );
        },
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(ContestsList);
