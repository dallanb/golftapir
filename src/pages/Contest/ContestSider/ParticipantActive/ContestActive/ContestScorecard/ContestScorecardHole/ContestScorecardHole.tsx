import React from 'react';
import { useSelector } from 'react-redux';
import { get as _get } from 'lodash';
import { LeftCircleTwoTone, RightCircleTwoTone } from '@ant-design/icons';
import { Button, Divider } from 'antd';
import { ContestScorecardHoleProps } from './types';
import { selectSheet } from '../../selector';
import './ContestScorecardHole.less';
import CONSTANTS from '@locale/en-CA';

const ContestScorecardHole: React.FunctionComponent<ContestScorecardHoleProps> = ({
    hole,
    setHole,
}) => {
    const sheet = useSelector(selectSheet);
    const holes = _get(sheet, ['holes'], {});
    const holeNums: number[] = Object.keys(holes).map(Number);
    const maxHole = Math.max(...holeNums);
    const onChange = (page: number) => {
        setHole(page);
    };

    const renderHole = (hole: number) => {
        return (
            <div className="contest-scorecard-hole-hole">
                <div className="contest-scorecard-hole-hole-label">
                    {CONSTANTS.PAGES.CONTEST.SCORECARD.HOLE}
                </div>
                <div className="contest-scorecard-hole-hole-value">{hole}</div>
            </div>
        );
    };

    const renderPar = (hole: number) => {
        const par = _get(holes, [hole, 'par'], 3);
        return (
            <div className="contest-scorecard-hole-par">
                <div className="contest-scorecard-hole-par-label">
                    {CONSTANTS.PAGES.CONTEST.SCORECARD.PAR}
                </div>
                <div className="contest-scorecard-hole-par-value">{par}</div>
            </div>
        );
    };

    const renderDistance = (hole: number) => {
        const distance = _get(holes, [hole, 'distance'], null);
        return (
            <div className="contest-scorecard-hole-distance">
                <div className="contest-scorecard-hole-distance-label">
                    {CONSTANTS.PAGES.CONTEST.SCORECARD.DISTANCE}
                </div>
                <div className="contest-scorecard-hole-distance-value">
                    {distance}
                </div>
            </div>
        );
    };

    return (
        <div className="contest-scorecard-hole">
            <Button
                type="text"
                icon={
                    <LeftCircleTwoTone className="contest-scorecard-hole-page-left" />
                }
                disabled={hole === 1}
                onClick={() => onChange(hole - 1)}
            />
            <div className="contest-scorecard-hole-static">
                {renderHole(hole)}
                <Divider
                    type="vertical"
                    className="contest-scorecard-hole-divider"
                />
                {renderPar(hole)}
                <Divider
                    type="vertical"
                    className="contest-scorecard-hole-divider"
                />
                {renderDistance(hole)}
            </div>
            <Button
                type="text"
                icon={
                    <RightCircleTwoTone className="contest-scorecard-hole-page-right" />
                }
                disabled={hole === maxHole}
                onClick={() => onChange(hole + 1)}
            />
        </div>
    );
};

export default ContestScorecardHole;
