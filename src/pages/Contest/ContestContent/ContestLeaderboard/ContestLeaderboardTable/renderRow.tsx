import React from 'react';
import { RowRendererProps } from '@components/Table/types';
import ContestLeaderboardTableScorecard from './ContestLeaderboardTableScorecard';

const renderRow: React.FunctionComponent<RowRendererProps> = ({
    props: { style, index, data },
    prepareRow,
}) => {
    const row = data[index];
    prepareRow(row);
    const rowProps = row.getRowProps({ style });

    return (
        <>
            <div {...rowProps} className="tr">
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
            {row.isExpanded && (
                <ContestLeaderboardTableScorecard
                    row={row}
                    rowProps={rowProps}
                />
            )}
        </>
    );
};

export default renderRow;
