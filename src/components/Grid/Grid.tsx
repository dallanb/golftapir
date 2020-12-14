import React from 'react';
import { FixedSizeGrid } from 'react-window';
import { GridProps } from './types';
import InfiniteLoader from 'react-window-infinite-loader';
import defaultRowItemRenderer from './defaultRowItemRenderer';
import './Grid.less';

const Grid: React.FunctionComponent<GridProps> = ({
    rowItemRenderer = defaultRowItemRenderer,
    loadMoreItems,
    isItemLoading,
    itemCount,
    hasNextPage,
    itemData,
    scrollState,
    setScrollRowAndColumn,
    columnWidth,
    rowHeight,
    columnCount,
    height,
    rowCount,
    width,
}) => {
    return (
        <InfiniteLoader
            isItemLoaded={(index) => !hasNextPage || index < itemCount}
            loadMoreItems={(startIndex, stopIndex) =>
                isItemLoading
                    ? new Promise((resolve) => resolve(null))
                    : new Promise((resolve) =>
                          loadMoreItems(startIndex, stopIndex, resolve)
                      )
            }
            itemCount={hasNextPage ? itemCount + 1 : itemCount}
        >
            {({ onItemsRendered, ref }) => (
                <FixedSizeGrid
                    columnWidth={columnWidth}
                    rowHeight={rowHeight}
                    columnCount={columnCount}
                    height={height}
                    rowCount={rowCount}
                    width={width}
                    itemData={itemData}
                    initialScrollTop={100 * scrollState.rowIndex}
                    initialScrollLeft={100 * scrollState.columnIndex}
                    onItemsRendered={({
                        visibleRowStartIndex,
                        visibleColumnStartIndex,
                        visibleRowStopIndex,
                        overscanRowStopIndex,
                        overscanRowStartIndex,
                    }) => {
                        setScrollRowAndColumn(
                            visibleRowStartIndex,
                            visibleColumnStartIndex
                        );
                        onItemsRendered({
                            overscanStartIndex: overscanRowStartIndex,
                            overscanStopIndex: overscanRowStopIndex,
                            visibleStartIndex: visibleRowStartIndex,
                            visibleStopIndex: visibleRowStopIndex,
                        });
                    }}
                    ref={ref}
                >
                    {rowItemRenderer}
                </FixedSizeGrid>
            )}
        </InfiniteLoader>
    );
};

export default Grid;
