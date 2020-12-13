import React from 'react';
import { RowRendererProps } from './types';

const defaultRowRenderer: React.FunctionComponent<RowRendererProps> = ({
    row,
}) => (
    <tr {...row.getRowProps()}>
        {row.cells.map((cell: any) => {
            return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>;
        })}
    </tr>
);

export default defaultRowRenderer;
