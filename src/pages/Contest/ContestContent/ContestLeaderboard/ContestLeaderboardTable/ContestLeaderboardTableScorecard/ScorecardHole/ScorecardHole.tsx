import React from 'react';
import classnames from 'classnames';
import { get as _get } from 'lodash';
import { useSelector } from 'react-redux';
import { ScorecardHoleProps } from './types';
import constants from '@constants';
import { selectData } from '../selector';
import './ScorecardHole.less';

const ScorecardHole: React.FunctionComponent<ScorecardHoleProps> = ({
    index,
    row,
    value,
}) => {
    const head = _get(row, ['values', 'head'], null);
    if (head === constants.SCORECARD.ROUND && index) {
        const scorecard = useSelector(selectData);
        const status = _get(scorecard, ['data', 3, `hole-${index}`], undefined);
        let score = '';
        switch (true) {
            case status >= constants.HOLE_SCORE.DOUBLE_BOGEY:
                score = 'double-bogey';
                break;
            case status == constants.HOLE_SCORE.BOGEY:
                score = 'bogey';
                break;
            case status == constants.HOLE_SCORE.PAR:
                score = 'par';
                break;
            case status == constants.HOLE_SCORE.BIRDIE:
                score = 'birdie';
                break;
            case status <= constants.HOLE_SCORE.EAGLE:
                score = 'eagle';
                break;
        }
        const cx = classnames('score-hole', score);
        return <div className={cx}>{value}</div>;
    }
    return <>{value}</>;
};

export default ScorecardHole;
