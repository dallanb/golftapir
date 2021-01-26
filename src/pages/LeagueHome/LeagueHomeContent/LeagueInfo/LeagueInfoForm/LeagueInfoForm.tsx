import React from 'react';
import { useSelector } from 'react-redux';
import { LeagueInfoFormProps } from './types';
import { Form } from '@components';
import { fieldSchema, validationSchema } from './schema';
import { selectMe } from '@selectors/BaseSelector';
import { prepareInitialValues } from '../utils';
import { selectLeagueData } from '@apps/LeagueApp/selector';
import './LeagueInfoForm.less';

const LeagueInfoForm: React.FunctionComponent<LeagueInfoFormProps> = () => {
    const leagueData = useSelector(selectLeagueData);
    const initialValues = prepareInitialValues(leagueData);
    return (
        <div className="league-info-form">
            <Form
                fieldSchema={fieldSchema}
                validationSchema={validationSchema}
                initialValues={initialValues}
                onSubmit={() => null}
                submitButton={null}
            />
        </div>
    );
};

export default LeagueInfoForm;
