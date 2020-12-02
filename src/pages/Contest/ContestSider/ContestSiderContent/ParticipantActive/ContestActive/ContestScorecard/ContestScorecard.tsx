import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { get as _get } from 'lodash';
import { Button, Pagination, Statistic } from 'antd';
import { MinusCircleTwoTone, PlusCircleTwoTone } from '@ant-design/icons/lib';
import { selectData, selectSheet } from '../selector';
import ContestPageSiderContentParticipantActiveContestActiveActions from '../actions';
import { ContestScorecardProps } from './types';
import './ContestScorecard.scss';
import ComponentContent from '@layouts/ComponentContent';

const ContestScorecard: React.FunctionComponent<ContestScorecardProps> = () => {
    const dispatch = useDispatch();
    const { isInitialized } = useSelector(selectData);
    const sheet = useSelector(selectSheet);
    const uuid = _get(sheet, ['uuid'], null);
    const holes = _get(sheet, ['holes'], []);

    const initialCurrent = 1;
    const initialStrokes = _get(holes, [initialCurrent, 'strokes'], 0) || 0;

    const [current, setCurrent] = useState(initialCurrent);
    const [strokes, setStrokes] = useState(initialStrokes);

    const onChange = (page: number) => {
        setCurrent(page);
        const prevStrokes = _get(holes, [page, 'strokes'], 0) || 0;
        setStrokes(prevStrokes);
    };

    const updateScore = (page: number, newStrokes: number) => {
        setStrokes(newStrokes);
        dispatch(
            ContestPageSiderContentParticipantActiveContestActiveActions.debouncedHoleStrokeUpdate(
                page,
                newStrokes
            )
        );
    };

    const renderHole = (hole: number) => {
        return (
            <div className="contest-scorecard-hole">
                <div className="contest-scorecard-hole-label">Hole</div>
                <div className="contest-scorecard-hole-value">{hole}</div>
            </div>
        );
    };

    const renderStrokes = (hole: number) => {
        return (
            <div className="contest-scorecard-strokes">
                <div className="contest-scorecard-strokes-label">Strokes</div>
                <div className="contest-scorecard-strokes-input">
                    <Button
                        type="text"
                        icon={
                            <MinusCircleTwoTone className="contest-scorecard-strokes-minus" />
                        }
                        disabled={!strokes}
                        onClick={() => updateScore(hole, strokes - 1)}
                    />
                    <div className="contest-scorecard-strokes-value">
                        {strokes}
                    </div>
                    <Button
                        type="text"
                        icon={
                            <PlusCircleTwoTone className="contest-scorecard-strokes-plus" />
                        }
                        onClick={() => updateScore(hole, strokes + 1)}
                    />
                </div>
            </div>
        );
    };

    return (
        <ComponentContent
            showSpinner={!isInitialized}
            className="contest-scorecard"
        >
            {renderHole(current)}
            {renderStrokes(current)}
            <Pagination
                size="small"
                showLessItems
                onChange={onChange}
                total={18}
                defaultPageSize={1}
                current={current}
                className="contest-scorecard-pagination"
            />
        </ComponentContent>
    );
};

export default ContestScorecard;
