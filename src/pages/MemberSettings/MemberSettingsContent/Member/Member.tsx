import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MemberForm from './MemberForm';
import { MemberSettingsProps } from './types';
import MemberSettingsPageContentMemberActions from './actions';
import { selectData } from './selector';
import ComponentContent from '@layouts/ComponentContent';
import './Member.less';

const MemberSettings: React.FunctionComponent<MemberSettingsProps> = ({}) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(MemberSettingsPageContentMemberActions.init());
        return () => {
            dispatch(MemberSettingsPageContentMemberActions.terminate());
        };
    }, []);

    const { isInitialized } = useSelector(selectData);

    return (
        <ComponentContent showSpinner={!isInitialized} className="member">
            <MemberForm />
        </ComponentContent>
    );
};

export default MemberSettings;
