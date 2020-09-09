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

    // loadMoreItems = () => {
    //     const { isFetching, loadMore } = this.props;
    //     if (!isFetching) {
    //         loadMore();
    //     }
    // };

    loadMoreItems = (startIndex: number, stopIndex: number): Promise<void> => {
        const { loadMore } = this.props;
        return new Promise((resolve) =>
            loadMore(startIndex, stopIndex, resolve)
        );
    };

    isItemLoaded = (index: number) => {
        const { loadCount } = this.props;
        return index <= loadCount;
    };

    render() {
        const { count, size, data } = this.props;
        console.log(this.props);

        return (
            <InfiniteLoader
                isItemLoaded={this.isItemLoaded}
                loadMoreItems={this.loadMoreItems}
                itemCount={count}
            >
                {({ onItemsRendered, ref }) => (
                    <section>
                        <FixedSizeList
                            className="List"
                            itemCount={count}
                            itemSize={size}
                            onItemsRendered={onItemsRendered}
                            height={600}
                            width={600}
                            ref={ref}
                        >
                            {this.rowRenderer}
                        </FixedSizeList>
                    </section>
                )}
            </InfiniteLoader>
        );
    }
}

export default List;
