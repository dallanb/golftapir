import React from 'react';
import { useDispatch } from 'react-redux';
import { FormikValues } from 'formik';
import { isEqual as _isEqual, get as _get, set as _set } from 'lodash';
import { ContestMatchupCarouselHoleEditFormProps } from './types';
import { Form } from '@components';
import { ModalActions } from '@actions';
import ContestMatchupPageActions from '@pages/ContestMatchup/actions';
import { fieldSchema, validationSchema } from './schema';
import './ContestMatchupCarouselHoleEditForm.scss';

const ContestMatchupCarouselHoleEditForm: React.FunctionComponent<ContestMatchupCarouselHoleEditFormProps> = ({
    initialValues,
}) => {
    const dispatch = useDispatch();

    const handleSubmit = (values: FormikValues) => {
        const uuid = _get(values, ['uuid'], null);
        const holeID = _get(values, ['hole_number'], null);
        const holeData = Object.entries(values).reduce(
            (accum: any, [key, value]: any) =>
                !_isEqual(value, _get(initialValues, [key], undefined))
                    ? _set(accum, [key], value)
                    : accum,
            {}
        );
        dispatch(
            ContestMatchupPageActions.updateScoreSheetHole(
                uuid,
                holeID,
                holeData
            )
        );
        dispatch(ModalActions.closeModal());
    };
    return (
        <Form
            fieldSchema={fieldSchema}
            validationSchema={validationSchema}
            initialValues={initialValues}
            onSubmit={handleSubmit}
        />
    );
};

export default ContestMatchupCarouselHoleEditForm;
