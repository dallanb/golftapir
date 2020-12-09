import React from 'react';
import { RowRendererProps } from '@components/Table/types';
import ContestLeaderboardTableScorecard from './ContestLeaderboardTableScorecard';

const renderRow: React.FunctionComponent<RowRendererProps> = ({
    props: { style, index, data },
    prepareRow,
    listRef,
}) => {
    const row = data[index];
    prepareRow(row);
    const rowProps = row.getRowProps({ style });

    return (
        <div className="tr-group" {...rowProps}>
            <div className="tr">
                {row.cells.map((cell: any) => (
                    <div
                        {...cell.getCellProps({
                            className: cell.column.className
                                ? `td ${cell.column.className}`
                                : 'td',
                        })}
                    >
                        {cell.render('Cell', { listRef })}
                    </div>
                ))}
            </div>
            {row.isExpanded && (
                <div className="tr">
                    <ContestLeaderboardTableScorecard row={row} />
                </div>
            )}
        </div>
    );
};

export default renderRow;
