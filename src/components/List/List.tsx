import React from 'react';
import { FixedSizeList } from 'react-window';
// import AutoSizer from 'react-virtualized-auto-sizer';
import InfiniteLoader from 'react-window-infinite-loader';
import { ListProps } from './types';
import defaultRowRenderer from './defaultRowRenderer';
import './List.scss';

const List: React.FunctionComponent<ListProps> = ({
    rowRenderer = defaultRowRenderer,
    size,
    hasNextPage,
    isNextPageLoading,
    items,
    loadNextPage,
    minimumBatchSize,
    height = 500,
    width = 500,
}) => {
    const loadMoreItems = (startIndex: number, stopIndex: number): any =>
        isNextPageLoading
            ? new Promise((resolve) => resolve())
            : new Promise((resolve) =>
                  loadNextPage(startIndex, stopIndex, resolve)
              );

    const isItemLoaded = (index: number) =>
        !hasNextPage || index < items.length;

    return (
        <InfiniteLoader
            isItemLoaded={isItemLoaded}
            loadMoreItems={loadMoreItems}
            itemCount={hasNextPage ? items.length + 1 : items.length}
            minimumBatchSize={minimumBatchSize}
        >
            {({ onItemsRendered, ref }) => (
                <section>
                    <FixedSizeList
                        className="List"
                        itemCount={
                            hasNextPage ? items.length + 1 : items.length
                        }
                        itemData={items}
                        itemSize={size}
                        onItemsRendered={onItemsRendered}
                        height={height}
                        width={width}
                        ref={ref}
                    >
                        {rowRenderer}
                    </FixedSizeList>
                </section>
            )}
        </InfiniteLoader>
    );
};
export default List;
