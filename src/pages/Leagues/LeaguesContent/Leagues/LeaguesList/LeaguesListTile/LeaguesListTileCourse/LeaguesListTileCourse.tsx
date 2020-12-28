import React from 'react';
import { LeaguesListTileCourseProps } from './types';
import './LeaguesListTileCourse.less';

const LeaguesListTileCourse: React.FunctionComponent<LeaguesListTileCourseProps> = ({course}) =>
    <div className="course">
        <div className="course-label">
            COURSE
        </div>
        <div className="course-content">
            {course}
        </div>
    </div>;

export default LeaguesListTileCourse;
