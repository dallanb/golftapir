import React from 'react';
import { ContestsListTileCourseProps } from './types';
import './ContestsListTileCourse.less';

const ContestsListTileCourse: React.FunctionComponent<ContestsListTileCourseProps> = ({course}) =>
    <div className="course">
        <div className="course-label">
            COURSE
        </div>
        <div className="course-content">
            {course}
        </div>
    </div>;

export default ContestsListTileCourse;
