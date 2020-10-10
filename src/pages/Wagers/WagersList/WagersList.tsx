import React from 'react';
import { connect } from 'react-redux';
import { WagersListProps } from './types';
import { StateInterface } from '../types';
import { List } from '@components';
import { WagerActions } from '@actions';
import WagersListTile from './WagersListTile';
import './WagersList.scss';

class WagersList extends React.PureComponent<WagersListProps> {
    loadMore = (start: number, stop: number, resolve: () => any) => {
        const { fetchWagers } = this.props;
        fetchWagers({ page: Math.floor(stop / 100) + 1, per_page: 100 });
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
                rowRenderer={(props) => WagersListTile({ props, history })}
            />
        );
    }
}

const mapStateToProps = ({ wagersPage }: StateInterface) => {
    const {
        wagersList: { metadata, data, isFetching },
    } = wagersPage;
    return {
        metadata,
        data,
        isFetching,
    };
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        fetchWagers(options: any) {
            return dispatch(WagerActions.fetchWagers(options, true));
        },
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(WagersList);
