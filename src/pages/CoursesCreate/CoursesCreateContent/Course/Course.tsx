import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { get as _get } from 'lodash';
import CourseForm from './CourseForm';
import { CourseProps } from './types';
import CoursesCreatePageContentCourseActions from './actions';
import { selectData } from './selector';
import ComponentContent from '@layouts/ComponentContent';
import routes from '@constants/routes';
import { OverlaySpin } from '@components';
import './Course.less';
import { navigate, withAppRoute } from '@utils';

const Course: React.FunctionComponent<CourseProps> = ({}) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const params = useParams();

    const options = _get(history, ['location', 'state'], undefined);

    const { isSubmitted, isSubmitting, result } = useSelector(selectData);

    useEffect(() => {
        if (isSubmitted && result) {
            navigate(
                history,
                withAppRoute(routes.ROUTES.LEAGUE_HOME.ROUTE, {
                    routeProps: {
                        ...params,
                    },
                }),
                result
            );
        }
    });

    useEffect(() => {
        dispatch(CoursesCreatePageContentCourseActions.init(options));
        return () => {
            dispatch(CoursesCreatePageContentCourseActions.terminate());
        };
    }, []);

    const { isInitialized } = useSelector(selectData);

    return (
        <ComponentContent
            title={'Create Course'}
            showSpinner={!isInitialized}
            className="course"
        >
            <CourseForm />
            <OverlaySpin visible={isSubmitting} />
        </ComponentContent>
    );
};

export default Course;
