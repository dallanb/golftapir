import React from 'react';
import { VariableSizeList as List } from 'react-window';
import AutoSizer from 'react-virtualized-auto-sizer';
import InfiniteLoader from 'react-window-infinite-loader';
import { ListProps } from './types';
import defaultRowRenderer from './defaultRowRenderer';
import './VariableSizeList.scss';
import { mergeRefs } from '@utils';

const VariableSizeList: React.FunctionComponent<ListProps> = ({
    listRef,
    rowRenderer = defaultRowRenderer,
    itemSize,
    hasNextPage,
    isNextPageLoading,
    items,
    loadNextPage = () => null,
    minimumBatchSize,
}) => {
    const itemCount = hasNextPage ? items.length + 1 : items.length;

    const loadMoreItems = (start: number, stop: number) => {
        if (!isNextPageLoading) {
            loadNextPage(start, stop);
        }
        return null;
    };

    const isItemLoaded = (index: number) =>
        !hasNextPage || index < items.length;

    return (
        <AutoSizer>
            {({ height, width }) => (
                <InfiniteLoader
                    isItemLoaded={isItemLoaded}
                    loadMoreItems={loadMoreItems}
                    itemCount={itemCount}
                    minimumBatchSize={minimumBatchSize}
                >
                    {({ onItemsRendered, ref }) => (
                        <List
                            className="variable-size-list"
                            itemCount={itemCount}
                            itemData={items}
                            itemSize={itemSize}
                            onItemsRendered={onItemsRendered}
                            height={height}
                            width={width}
                            ref={mergeRefs(ref, listRef)}
                        >
                            {rowRenderer}
                        </List>
                    )}
                </InfiniteLoader>
            )}
        </AutoSizer>
    );
};
export default VariableSizeList;
