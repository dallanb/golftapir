import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MemberForm from './MemberForm';
import { MemberSettingsProps } from './types';
import MemberSettingsPageContentMemberActions from './actions';
import { selectIsInitialized as selectIsDataInitialized } from '@pages/MemberSettings/selector';
import { selectIsInitialized, selectIsSubmitting } from './selector';
import ComponentContent from '@layouts/ComponentContent';
import { OverlaySpin } from '@components';
import './Member.less';

const MemberSettings: React.FunctionComponent<MemberSettingsProps> = ({}) => {
    const dispatch = useDispatch();
    const isDataInitialized = useSelector(selectIsDataInitialized);
    const isInitialized = useSelector(selectIsInitialized);
    const isSubmitting = useSelector(selectIsSubmitting);
    const [isDataInitializing, setDataIsInitializing] = useState(true);

    useEffect(() => {
        return () => {
            dispatch(MemberSettingsPageContentMemberActions.terminate());
        };
    }, []);

    // TODO analyze if I should setting data init and dispatching in the same if statement
    useEffect(() => {
        if (isDataInitialized && isDataInitializing) {
            dispatch(MemberSettingsPageContentMemberActions.init());
            setDataIsInitializing(false);
        }
    }, [isDataInitialized]);

    return (
        <ComponentContent
            showSpinner={!isInitialized || !isDataInitialized}
            className="member-component-content"
            title={'Settings'}
        >
            <MemberForm />
            <OverlaySpin visible={isSubmitting} />
        </ComponentContent>
    );
};

export default MemberSettings;
