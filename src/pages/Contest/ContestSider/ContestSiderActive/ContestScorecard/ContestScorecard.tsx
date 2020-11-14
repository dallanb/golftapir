import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { get as _get } from 'lodash';
import { Button, Pagination, Statistic } from 'antd';
import { MinusCircleTwoTone, PlusCircleTwoTone } from '@ant-design/icons/lib';
import { selectSheet } from '@pages/Contest/selector';
import { ContestScorecardProps } from './types';
import './ContestScorecard.scss';

const ContestScorecard: React.FunctionComponent<ContestScorecardProps> = () => {
    const [current, setCurrent] = useState(1);
    const [strokes, setStrokes] = useState('NA');

    const sheet = useSelector(selectSheet);
    const uuid = _get(sheet, ['uuid'], null);
    const holes = _get(sheet, ['holes'], []);

    const onChange = (page: number) => {
        console.log(page);
        setCurrent(page);
        const prevStrokes = _get(holes, [page, 'strokes'], 0) || 0;
        setStrokes(prevStrokes);
    };

    const renderHole = (hole: number) => {
        return <Statistic title="Hole" value={hole} />;
    };

    const renderStrokes = (hole: number) => {
        return (
            <div>
                <div>Strokes</div>
                <div>
                    <Button
                        icon={
                            <MinusCircleTwoTone className="contest-scorecard-strokes-minus" />
                        }
                    />
                    {strokes}
                    <Button
                        icon={
                            <PlusCircleTwoTone className="contest-scorecard-strokes-plus" />
                        }
                    />
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
