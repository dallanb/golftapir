import React, { useMemo } from 'react';
import { FixedSizeGrid } from 'react-window';
import { GridProps as FixedSizeGridProps } from 'react-window';
import { useTable } from 'react-table';
import { GridProps, RowItemRendererProps } from './types';
import InfiniteLoader from 'react-window-infinite-loader';
import defaultRowItemRenderer from './defaultRowItemRenderer';
import './Grid.scss';

const Grid: React.FunctionComponent<GridProps> = ({
    rowItemRenderer = defaultRowItemRenderer,
    loadMoreItems,
    isItemLoading,
    itemCount,
    hasNextPage,
    columnsSchema,
    items,
    scrollState,
    setScrollRowAndColumn,
}) => {
    const { headers, rows, prepareRow } = useTable({
        data: items,
        columns: columnsSchema,
    });

    const itemData = useMemo(
        () => ({
            headers,
            rows,
            prepareRow,
        }),
        [headers, rows, prepareRow]
    );
    return (
        <InfiniteLoader
            isItemLoaded={(index) => !hasNextPage || index < itemCount}
            loadMoreItems={(startIndex, stopIndex) =>
                isItemLoading
                    ? new Promise((resolve) => resolve())
                    : new Promise((resolve) =>
                          loadMoreItems(startIndex, stopIndex, resolve)
                      )
            }
            itemCount={hasNextPage ? itemCount + 1 : itemCount}
        >
            {({ onItemsRendered, ref }) => (
                <FixedSizeGrid
                    columnWidth={200}
                    rowHeight={50}
                    columnCount={2}
                    height={400}
                    rowCount={2}
                    width={400}
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
                    {(props) => rowItemRenderer(props)}
                </FixedSizeGrid>
            )}
        </InfiniteLoader>
    );
};

export default Grid;
