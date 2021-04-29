import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { get as _get, pick as _pick } from 'lodash';
import { CourseProps } from './types';
import { selectIsInitialized as selectDataIsInitialized } from '@modules/Contest/selector';
import { selectData } from './selector';
import ContestPageSiderCourseActions from './actions';
import { SiderComponentContent } from '@layouts/ComponentContent';
import { formatCourseAddress } from './utils';
import './Course.less';
import CONSTANTS from '@locale/en-CA';

const Course: React.FunctionComponent<CourseProps> = () => {
    const dispatch = useDispatch();
    const { isInitialized, course } = useSelector(selectData);
    const isDataInitialized = useSelector(selectDataIsInitialized);
    const [isDataInitializing, setIsDataInitializing] = useState(true);

    useEffect(() => {
        return () => {
            dispatch(ContestPageSiderCourseActions.terminate());
        };
    }, []);

    useEffect(() => {
        if (isDataInitialized && isDataInitializing) {
            dispatch(ContestPageSiderCourseActions.init());
            setIsDataInitializing(false);
        }
    }, [isDataInitialized]);

    const name = _get(course, ['name'], '');
    const address = formatCourseAddress(
        _pick(course, ['city', 'province', 'country'])
    );
    return (
        <SiderComponentContent
            className="course-component-content space"
            showSpinner={!isInitialized || !isDataInitialized}
            title={CONSTANTS.PAGES.CONTEST.COURSE}
        >
            <div className="course">
                <div className="course-name">{name}</div>
                <div className="course-address">{address}</div>
            </div>
        </SiderComponentContent>
    );
};

export default Course;
