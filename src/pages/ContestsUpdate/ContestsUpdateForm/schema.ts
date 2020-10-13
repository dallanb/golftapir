import * as Yup from 'yup';
import 'yup-phone';
import InputWrapper from '@components/InputWrapper';
import CONSTANTS from '@locale/en-CA';
const FORM = CONSTANTS.PAGES.CONTESTS_CREATE.FORM;

export const fieldSchema = [
    {
        name: 'name',
        wrapper: InputWrapper,
        wrapperOptions: {
            label: FORM.LABELS.NAME,
        },
    },
];

export const validationSchema = Yup.object({
    owner_uuid: Yup.string(),
    sport_uuid: Yup.string(),
    name: Yup.string().required(FORM.VALIDATION.NAME_REQUIRED),
    participants: Yup.array(),
});
