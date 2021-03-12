import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FormikValues } from 'formik';
import { CourseFormProps } from './types';
import { Form } from '@components';
import CoursesCreatePageContentCourseActions from '../actions';
import { fieldSchema, validationSchema } from './schema';
import { selectData as selectCourseFormData } from '../selector';
import './CourseForm.less';

const CourseForm: React.FunctionComponent<CourseFormProps> = () => {
    const dispatch = useDispatch();
    const { initialValues } = useSelector(selectCourseFormData);
    const handleSubmit = (values: FormikValues) => {
        dispatch(CoursesCreatePageContentCourseActions.submit(values));
    };
    return (
        <div className="contest-form">
            <Form
                fieldSchema={fieldSchema}
                validationSchema={validationSchema}
                initialValues={initialValues}
                onSubmit={handleSubmit}
            />
        </div>
    );
};

export default CourseForm;
