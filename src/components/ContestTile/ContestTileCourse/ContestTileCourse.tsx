import React from 'react';
import { ContestTileCourseProps } from './types';
import './ContestTileCourse.less';

const ContestTileCourse: React.FunctionComponent<ContestTileCourseProps> = ({course}) =>
    <div className="course">
        <div className="course-label">
            COURSE
        </div>
        <div className="course-content">
            {course}
        </div>
    </div>;

export default ContestTileCourse;
