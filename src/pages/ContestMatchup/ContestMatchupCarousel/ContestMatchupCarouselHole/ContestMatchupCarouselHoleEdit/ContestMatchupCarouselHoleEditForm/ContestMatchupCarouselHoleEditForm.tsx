import React, { useContext } from 'react';
import { useDispatch } from 'react-redux';
import { FormikValues } from 'formik';
import { isEqual as _isEqual, get as _get, set as _set } from 'lodash';
import { ContestMatchupCarouselHoleEditFormProps } from './types';
import { Form } from '@components';
import { ScoreActions } from '@actions';
import { fieldSchema, validationSchema } from './schema';
import ContestMatchupCarouselContext from '../../../ContestMatchupCarouselContext';
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
        console.log(uuid);
        console.log(holeID);
        console.log(holeData);
        dispatch(ScoreActions.updateHole(uuid, holeID, holeData));
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
