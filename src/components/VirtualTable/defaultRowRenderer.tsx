import React from 'react';
import { RowRendererProps } from './types';

const defaultRowRenderer: React.FunctionComponent<RowRendererProps> = ({
    props: { style, index, data },
    prepareRow,
    listRef,
}) => {
    const row = data[index];
    prepareRow(row);
    return (
        <div
            {...row.getRowProps({
                style,
            })}
            className="tr"
        >
            {row.cells.map((cell: any) => {
                return (
                    <div
                        {...cell.getCellProps({
                            className: cell.column.className
                                ? `td ${cell.column.className}`
                                : 'td',
                        })}
                    >
                        {cell.render('Cell')}
                    </div>
                );
            })}
        </div>
    );
};

export default defaultRowRenderer;
