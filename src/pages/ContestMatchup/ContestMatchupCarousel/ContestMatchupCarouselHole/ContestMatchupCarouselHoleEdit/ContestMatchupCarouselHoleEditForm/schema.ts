import * as Yup from 'yup';
import 'yup-phone';
import InputWrapper from '@components/InputWrapper';
import CONSTANTS from '@locale/en-CA';

const FORM = CONSTANTS.PAGES.CONTEST_MATCHUP.EDIT_HOLE_FORM;

export const fieldSchema = [
    {
        name: 'uuid',
        wrapper: InputWrapper,
        wrapperOptions: {
            hidden: true,
        },
        options: {},
    },
    {
        name: 'hole_number',
        wrapper: InputWrapper,
        wrapperOptions: {
            label: FORM.LABELS.HOLE_NUMBER,
        },
        options: {
            readonly: true,
        },
    },
    {
        name: 'strokes',
        type: 'number',
        wrapper: InputWrapper,
        wrapperOptions: {
            label: FORM.LABELS.STROKES,
        },
    },
];

export const validationSchema = Yup.object({
    uuid: Yup.string(),
    hole_number: Yup.number(),
    strokes: Yup.number().required(FORM.VALIDATION.STROKES_REQUIRED),
});
