import React from 'react';
import { FixedSizeList as List } from 'react-window';
// import AutoSizer from 'react-virtualized-auto-sizer';
import InfiniteLoader from 'react-window-infinite-loader';
import { ListProps } from './types';
import defaultRowRenderer from './defaultRowRenderer';
import './FixedSizeList.scss';

const FixedSizeList: React.FunctionComponent<ListProps> = ({
    rowRenderer = defaultRowRenderer,
    size,
    hasNextPage,
    isNextPageLoading,
    items,
    loadNextPage = () => null,
    minimumBatchSize,
    height = 500,
    width = 500,
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
        <InfiniteLoader
            isItemLoaded={isItemLoaded}
            loadMoreItems={loadMoreItems}
            itemCount={itemCount}
            minimumBatchSize={minimumBatchSize}
        >
            {({ onItemsRendered, ref }) => (
                <section>
                    <List
                        className="fixed-size-list"
                        itemCount={itemCount}
                        itemData={items}
                        itemSize={size}
                        onItemsRendered={onItemsRendered}
                        height={height}
                        width={width}
                        ref={ref}
                    >
                        {rowRenderer}
                    </List>
                </section>
            )}
        </InfiniteLoader>
    );
};
export default FixedSizeList;
