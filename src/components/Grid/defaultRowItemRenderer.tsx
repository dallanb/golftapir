import React from 'react';
import { RowItemRendererProps } from './types';

const defaultRowItemRenderer: React.FunctionComponent<RowItemRendererProps> = ({
    rowIndex,
    columnIndex,
    data,
    style,
}) => {
    const { rows, prepareRow } = data;
    // get row
    const row = rows[rowIndex];
    if (!row) {
        return <div style={style}> LOADING... </div>;
    }

    if (!row.getRowProps) {
        prepareRow(row);
    }

    const column = row.cells[columnIndex];

    return (
        <div {...column.getCellProps({ style })}>{column.render('Cell')}</div>
    );
};

export default defaultRowItemRenderer;
