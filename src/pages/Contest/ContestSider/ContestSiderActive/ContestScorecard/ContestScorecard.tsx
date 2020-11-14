import React, { useState } from 'react';
import { Pagination, Statistic } from 'antd';
import { MinusCircleTwoTone, PlusCircleTwoTone } from '@ant-design/icons/lib';
import { ContestScorecardProps } from './types';
import './ContestScorecard.scss';

const ContestScorecard: React.FunctionComponent<ContestScorecardProps> = () => {
    const [current, setCurrent] = useState(1);
    const [strokes, setStrokes] = useState('NA');

    const onChange = (page: number) => {
        console.log(page);
        setCurrent(page);
    };

    const renderHole = (hole: number) => {
        return <Statistic title="Hole" value={hole} />;
    };

    const renderStrokes = (hole: number) => {
        return (
            <div>
                <div>Strokes</div>
                <div>
                    <MinusCircleTwoTone className="contest-scorecard-strokes-minus" />
                    {strokes}
                    <PlusCircleTwoTone className="contest-scorecard-strokes-plus" />
                </div>
            </div>
        );
    };

    return (
        <div className="contest-scorecard">
            {renderHole(current)}
            {renderStrokes(current)}
            <Pagination
                size="small"
                showLessItems
                onChange={onChange}
                total={18}
                defaultPageSize={1}
                current={current}
            />
        </div>
    );
};

export default ContestScorecard;
