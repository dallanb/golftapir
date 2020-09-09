import React from 'react';
import { FixedSizeList } from 'react-window';
import AutoSizer from 'react-virtualized-auto-sizer';
import { ListProps, ListState, RowRendererProps } from './types';
import defaultRowRenderer from './defaultRowRenderer';
import './List.scss';

class List extends React.PureComponent<ListProps, ListState> {
    private readonly rowRenderer: RowRendererProps;

    constructor(props: ListProps) {
        super(props);
        this.rowRenderer = props.rowRenderer || defaultRowRenderer;
    }
    render() {
        const { itemCount, itemSize, itemData } = this.props;
        console.log(this.props);

        return (
            <AutoSizer>
                {({ height, width }) => (
                    <FixedSizeList
                        className="List"
                        height={height}
                        itemCount={itemCount}
                        itemSize={itemSize}
                        width={width}
                        itemData={itemData}
                    >
                        {this.rowRenderer}
                    </FixedSizeList>
                )}
            </AutoSizer>
        );
    }
}

export default List;
