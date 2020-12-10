import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { CompetitorResultsListProps } from './types';
import { FixedSizeList } from '@components';
import { selectListData, selectListIsFetching } from '../selector';
import CompetitorResultsListTile from './CompetitorResultsListTile';
import './CompetitorResultsList.scss';
import { getRefHeight } from '@utils';

const CompetitorResultsList: React.FunctionComponent<CompetitorResultsListProps> = ({
    containerRef,
}) => {
    const history = useHistory();
    const data = useSelector(selectListData);
    const isFetching = useSelector(selectListIsFetching);

    const tableDimensions = {
        size: 100,
        width: '100%',
        height: getRefHeight(containerRef, 200) - 32,
    };

    return (
        <FixedSizeList
            {...tableDimensions}
            items={data}
            hasNextPage={false}
            isNextPageLoading={isFetching}
            minimumBatchSize={10}
            rowRenderer={(props) =>
                CompetitorResultsListTile({ props, history })
            }
        />
    );
};

export default CompetitorResultsList;
