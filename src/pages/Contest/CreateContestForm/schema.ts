import * as Yup from 'yup';
import 'yup-phone';
import InputWrapper from '../../../components/InputWrapper';
import CONSTANTS from '../../../locale/en-CA';

const FORM = CONSTANTS.ACCOUNT.FORM;

export const fieldSchema = [
    {
        name: 'owner_uuid',
        wrapper: InputWrapper,
        wrapperOptions: {
            hidden: true,
        },
        options: {},
    },
    {
        name: 'sport_uuid',
        wrapper: InputWrapper,
        wrapperOptions: {
            hidden: true,
        },
        options: {},
    },
];

export const validationSchema = Yup.object({
    owner_uuid: Yup.string(),
    sport_uuid: Yup.string(),
});
