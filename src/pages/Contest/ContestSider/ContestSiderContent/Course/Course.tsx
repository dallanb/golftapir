import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { get as _get, pick as _pick } from 'lodash';
import { CourseProps } from './types';
import { selectData } from './selector';
import ContestPageSiderContentCourseActions from './actions';
import './Course.less';
import ComponentContent from '@layouts/ComponentContent';
import { formatCourseAddress } from '@pages/Contest/ContestSider/ContestSiderContent/Course/utils';

const Course: React.FunctionComponent<CourseProps> = () => {
    const dispatch = useDispatch();
    const { isInitialized, course } = useSelector(selectData);
    // Possibly move this out to participant active
    useEffect(() => {
        dispatch(ContestPageSiderContentCourseActions.init());
        return () => {
            dispatch(ContestPageSiderContentCourseActions.terminate());
        };
    }, []);

    const name = _get(course, ['name'], '');
    const address = formatCourseAddress(
        _pick(course, ['city', 'province', 'country'])
    );
    return (
        <ComponentContent
            className="course-component-content"
            showSpinner={!isInitialized}
            title={'Course'}
        >
            <div className="course">
                <div className="course-name">{name}</div>
                <div className="course-address">{address}</div>
            </div>
        </ComponentContent>
    );
};

export default Course;
