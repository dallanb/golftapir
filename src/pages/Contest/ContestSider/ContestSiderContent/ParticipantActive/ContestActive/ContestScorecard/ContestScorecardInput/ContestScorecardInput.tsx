import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { get as _get } from 'lodash';
import { Button } from 'antd';
import { MinusCircleTwoTone, PlusCircleTwoTone } from '@ant-design/icons/lib';
import { ContestScorecardInputProps } from './types';
import { selectSheet } from '../../selector';
import ContestPageSiderContentParticipantActiveContestActiveActions from '../../actions';
import './ContestScorecardInput.less';

const ContestScorecardInput: React.FunctionComponent<ContestScorecardInputProps> = ({
    hole,
}) => {
    const dispatch = useDispatch();
    const sheet = useSelector(selectSheet);
    const holes = _get(sheet, ['holes'], []);

    const [strokes, setStrokes] = useState(0);

    useEffect(() => {
        const currentStrokes = _get(holes, [hole, 'strokes'], 0) || 0;
        setStrokes(currentStrokes);
    }, [hole]);

    const updateScore = (page: number, newStrokes: number) => {
        setStrokes(newStrokes);
        dispatch(
            ContestPageSiderContentParticipantActiveContestActiveActions.debouncedHoleStrokeUpdate(
                page,
                newStrokes
            )
        );
    };

    const renderStrokes = (currHole: number) => {
        return (
            <div className="contest-scorecard-input-strokes">
                <div className="contest-scorecard-input-strokes-label">
                    Strokes
                </div>
                <div className="contest-scorecard-input-strokes-form">
                    <Button
                        type="text"
                        icon={
                            <MinusCircleTwoTone className="contest-scorecard-input-strokes-down" />
                        }
                        size={'small'}
                        disabled={!strokes}
                        onClick={() => updateScore(currHole, strokes - 1)}
                    />
                    <div className="contest-scorecard-input-strokes-value">
                        {strokes}
                    </div>
                    <Button
                        type="text"
                        icon={
                            <PlusCircleTwoTone className="contest-scorecard-input-strokes-up" />
                        }
                        size={'small'}
                        onClick={() => updateScore(currHole, strokes + 1)}
                    />
                </div>
            </div>
        );
    };

    return <div className="contest-scorecard-input">{renderStrokes(hole)}</div>;
};

export default ContestScorecardInput;
