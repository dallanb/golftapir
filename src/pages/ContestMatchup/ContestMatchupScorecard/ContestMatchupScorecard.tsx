import React from 'react';
import { connect } from 'react-redux';
import { Typography } from 'antd';
import { get as _get } from 'lodash';
import { ContestMatchupScorecardProps } from './types';
import { StateInterface } from '../types';
import { mapSheetItems } from '../utils';
import { Table } from '@components';
import { columnsSchema } from './schema';
import './ContestMatchupScorecard.scss';

class ContestMatchupScorecard extends React.PureComponent<
    ContestMatchupScorecardProps
> {
    loadMore = (start: number, stop: number, resolve: () => void) => resolve();

    render() {
        const { isFetching, items } = this.props;
        return (
            <div>
                <Typography.Title level={5}>Score Card</Typography.Title>
                <Table
                    columnsSchema={columnsSchema}
                    size={50} // row height
                    height={100}
                    width={740}
                    hasNextPage={false}
                    isNextPageLoading={isFetching}
                    items={items}
                    loadNextPage={this.loadMore}
                    minimumBatchSize={100}
                />
            </div>
        );
    }
}

const mapStateToProps = ({ contestMatchupPage }: StateInterface) => {
    const sheet = _get(contestMatchupPage, ['score', 'log', 'sheet'], []);
    const participants = _get(contestMatchupPage, ['participants'], []);
    const items = mapSheetItems(sheet, { participants });
    return {
        items,
        isFetching: false,
    };
};

export default connect(mapStateToProps)(ContestMatchupScorecard);
