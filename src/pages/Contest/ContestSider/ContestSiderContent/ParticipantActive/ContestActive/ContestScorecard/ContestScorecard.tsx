import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { get as _get } from 'lodash';
import { Button, Divider, Pagination, Statistic } from 'antd';
import {
    CaretDownFilled,
    CaretUpFilled,
    MinusCircleTwoTone,
    PlusCircleTwoTone,
} from '@ant-design/icons/lib';
import { ContestScorecardProps } from './types';
import { selectSheet } from '../selector';
import ContestPageSiderContentParticipantActiveContestActiveActions from '../actions';
import './ContestScorecard.less';
import ComponentContent from '@layouts/ComponentContent';

const ContestScorecard: React.FunctionComponent<ContestScorecardProps> = ({
    isInitialized,
}) => {
    const dispatch = useDispatch();
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

    const renderPar = (hole: number) => {
        const par = _get(holes, [hole, 'par'], 3);
        return (
            <div className="contest-scorecard-par">
                <div className="contest-scorecard-par-label">Par</div>
                <div className="contest-scorecard-par-value">{par}</div>
            </div>
        );
    };

    // move this into its own component
    const renderStrokes = (hole: number) => {
        return (
            <div className="contest-scorecard-strokes">
                <div className="contest-scorecard-strokes-label">Strokes</div>
                <div className="contest-scorecard-strokes-input">
                    <div className="contest-scorecard-strokes-value">
                        {strokes}
                    </div>
                    <div className="contest-scorecard-strokes-buttons">
                        <Button
                            type="text"
                            icon={
                                <CaretUpFilled className="contest-scorecard-strokes-up" />
                            }
                            size={'small'}
                            onClick={() => updateScore(hole, strokes + 1)}
                        />
                        <Button
                            type="text"
                            icon={
                                <CaretDownFilled className="contest-scorecard-strokes-down" />
                            }
                            size={'small'}
                            disabled={!strokes}
                            onClick={() => updateScore(hole, strokes - 1)}
                        />
                    </div>
                </div>
            </div>
        );
    };

    return (
        <>
            <ComponentContent
                showSpinner={!isInitialized}
                className="contest-scorecard-static"
            >
                {renderHole(current)}
                <Divider
                    type="vertical"
                    className="contest-scorecard-static-divider"
                />
                {renderPar(current)}
            </ComponentContent>
            <ComponentContent
                showSpinner={!isInitialized}
                className="contest-scorecard-input"
            >
                {renderStrokes(current)}
            </ComponentContent>
            <ComponentContent
                showSpinner={!isInitialized}
                className="contest-scorecard-pagination"
            >
                <Pagination
                    size="small"
                    showLessItems
                    onChange={onChange}
                    total={18}
                    defaultPageSize={1}
                    current={current}
                />
            </ComponentContent>
        </>
    );
};

export default ContestScorecard;
