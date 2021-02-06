import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { get as _get, pick as _pick } from 'lodash';
import { CourseProps } from './types';
import { selectIsInitialized as selectDataIsInitialized } from '@pages/Contest/selector';
import { selectData } from './selector';
import ContestPageSiderContentCourseActions from './actions';
import ComponentContent from '@layouts/ComponentContent';
import { formatCourseAddress } from './utils';
import './Course.less';

const Course: React.FunctionComponent<CourseProps> = () => {
    const dispatch = useDispatch();
    const { isInitialized, course } = useSelector(selectData);
    const isDataInitialized = useSelector(selectDataIsInitialized);
    const [isDataInitializing, setIsDataInitializing] = useState(true);

    useEffect(() => {
        return () => {
            dispatch(ContestPageSiderContentCourseActions.terminate());
        };
    }, []);

    useEffect(() => {
        if (isDataInitialized && isDataInitializing) {
            dispatch(ContestPageSiderContentCourseActions.init());
            setIsDataInitializing(false);
        }
    }, [isDataInitialized]);

    const name = _get(course, ['name'], '');
    const address = formatCourseAddress(
        _pick(course, ['city', 'province', 'country'])
    );
    return (
        <ComponentContent
            className="course-component-content space"
            showSpinner={!isInitialized || !isDataInitialized}
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
