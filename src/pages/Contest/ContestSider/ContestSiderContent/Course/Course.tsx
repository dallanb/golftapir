import React from 'react';
import { useSelector } from 'react-redux';
import { get as _get } from 'lodash';
import { CourseProps } from './types';
import { selectCourseData } from './selector';
import './Course.less';

const Course: React.FunctionComponent<CourseProps> = () => {
    const course = useSelector(selectCourseData);
    const name = _get(course, ['name'], '');
    return (
        <div className="course">
            <div className="course-label">Course</div>
            <div className="course-value">{name}</div>
        </div>
    );
};

export default Course;
