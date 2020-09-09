import React from 'react';
import { FixedSizeList } from 'react-window';
import AutoSizer from 'react-virtualized-auto-sizer';
import InfiniteLoader from 'react-window-infinite-loader';
import { ListProps, ListState, RowRendererProps } from './types';
import defaultRowRenderer from './defaultRowRenderer';
import './List.scss';

class List extends React.PureComponent<ListProps, ListState> {
    private readonly rowRenderer: RowRendererProps;

    constructor(props: ListProps) {
        super(props);
        this.rowRenderer = props.rowRenderer || defaultRowRenderer;
    }

    loadMoreItems = (startIndex: number, stopIndex: number): any => {
        console.log(startIndex);
        console.log(stopIndex);
        const { loadNextPage, isNextPageLoading } = this.props;
        return isNextPageLoading
            ? () => {}
            : new Promise((resolve) =>
                  loadNextPage(startIndex, stopIndex, resolve)
              );
    };

    isItemLoaded = (index: number) => {
        const { hasNextPage, items } = this.props;
        return !hasNextPage || index < items.length;
    };

    render() {
        const { count, items, minimumBatchSize, size } = this.props;

        return (
            <InfiniteLoader
                isItemLoaded={this.isItemLoaded}
                loadMoreItems={this.loadMoreItems}
                itemCount={count}
                minimumBatchSize={minimumBatchSize}
            >
                {({ onItemsRendered, ref }) => (
                    <section>
                        <FixedSizeList
                            className="List"
                            itemCount={count}
                            itemSize={size}
                            onItemsRendered={onItemsRendered}
                            height={500}
                            width={500}
                            ref={ref}
                        >
                            {(props) => this.rowRenderer(props, items)}
                        </FixedSizeList>
                    </section>
                )}
            </InfiniteLoader>
        );
    }
}

export default List;
