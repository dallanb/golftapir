import React from 'react';
import { connect } from 'react-redux';
import { ContestsListProps } from './types';
import { StateInterface } from '../types';
import { List } from '@components';
import ContestActions from '@actions/ContestActions';
import ContestsListTile from './ContestsListTile';
import './ContestsList.scss';

class ContestsList extends React.PureComponent<ContestsListProps> {
    loadMore = (start: number, stop: number, resolve: () => any) => {
        const { fetchContestsMaterialized } = this.props;
        fetchContestsMaterialized({
            page: Math.floor(stop / 100) + 1,
            per_page: 100,
        });
        resolve();
    };

    render() {
        const { metadata, data, isFetching, history } = this.props;
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
                rowRenderer={(props) => ContestsListTile({ props, history })}
            />
        );
    }
}

const mapStateToProps = ({ contestsPage }: StateInterface) => {
    const {
        contestsList: { metadata, data, isFetching },
    } = contestsPage;
    return {
        metadata,
        data,
        isFetching,
    };
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        fetchContestsMaterialized(options: any) {
            return dispatch(
                ContestActions.fetchContestsMaterialized(options, true)
            );
        },
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(ContestsList);
