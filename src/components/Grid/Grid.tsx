import React from 'react';
import { FixedSizeGrid } from 'react-window';
import { GridProps as FixedSizeGridProps } from 'react-window';
import { GridProps, RowItemRendererProps } from './types';
import './Grid.scss';
import InfiniteLoader from 'react-window-infinite-loader';
import { defaultRowItemRenderer } from './defaultRowItemRenderer';

class Grid extends React.PureComponent<GridProps> {
    private readonly rowItemRenderer: RowItemRendererProps;

    constructor(props: GridProps) {
        super(props);
        this.rowItemRenderer = props.rowItemRenderer || defaultRowItemRenderer;
    }

    render() {
        const {
            itemCount,
            loadMoreItems,
            isItemLoaded,
            scrollState,
            setScrollRowAndColumn,
            itemData,
        } = this.props;
        return (
            <InfiniteLoader isItemLoaded={} loadMoreItems={} itemCount={}>
                {({ onItemsRendered, ref }) => (
                    <FixedSizeGrid
                        columnWidth={100}
                        rowHeight={100}
                        columnCount={3}
                        height={400}
                        rowCount={4}
                        width={100}
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
                        {(props) => this.rowItemRenderer(props, items, history)}
                    </FixedSizeGrid>
                )}
            </InfiniteLoader>
        );
    }
}

export default Grid;
