import React from 'react';
import { RowRendererProps } from './types';
import ContestLeaderboardTableScorecard from '@pages/Contest/ContestContent/ContestLeaderboard/ContestLeaderboardTable/ContestLeaderboardTableScorecard';

const defaultRowRenderer: React.FunctionComponent<RowRendererProps> = ({
    props: { style, index, data },
    prepareRow,
    listRef,
}) => {
    const row = data[index];
    prepareRow(row);
    const rowProps = row.getRowProps({ style });
    return (
        <div className="tr-group" {...rowProps}>
            <div className="tr cell">
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
        </div>
    );
};

export default defaultRowRenderer;
