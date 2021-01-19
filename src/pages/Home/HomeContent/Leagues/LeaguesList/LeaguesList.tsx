import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { LeaguesListProps } from './types';
import { FixedSizeList } from '@components';
import { selectLeagues } from '@selectors/BaseSelector';
import LeaguesListTile from './LeaguesListTile';
import { getRefHeight } from '@utils';
import './LeaguesList.less';

const LeaguesList: React.FunctionComponent<LeaguesListProps> = ({
    containerRef,
}) => {
    const history = useHistory();
    const data = useSelector(selectLeagues);

    const tableDimensions = {
        size: 100,
        width: '100%',
        height: Math.min(
            data.length * 100,
            getRefHeight(containerRef, 200) - 32
        ),
    };

    const loadMore = (start: number, stop: number) => null;

    return (
        <FixedSizeList
            {...tableDimensions}
            items={data}
            hasNextPage={false}
            loadNextPage={loadMore}
            isNextPageLoading={false}
            minimumBatchSize={10}
            rowRenderer={(props) => LeaguesListTile({ props, history })}
        />
    );
};

export default LeaguesList;
