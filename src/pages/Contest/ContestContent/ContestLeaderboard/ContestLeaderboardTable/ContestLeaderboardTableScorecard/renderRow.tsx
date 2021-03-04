import React from 'react';
import classnames from 'classnames';
import { get as _get } from 'lodash';
import { RowRendererProps } from '@components/Table/types';

const renderRow: React.FunctionComponent<RowRendererProps> = ({ row }) => {
    const isEven = _get(row, ['index'], 1) % 2;
    const rowCx = classnames({ filled: isEven });
    return (
        <tr
            {...row.getRowProps({
                className: rowCx,
            })}
        >
            {row.cells.map((cell: any) => (
                <td
                    {...cell.getCellProps({
                        className: cell.column.className,
                    })}
                >
                    {cell.render('Cell')}
                </td>
            ))}
        </tr>
    );
};

export default renderRow;
