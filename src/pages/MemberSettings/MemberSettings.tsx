import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { get as _get } from 'lodash';
import { ContentLayout } from '@layouts';
import { MemberSettingsProps } from './types';
import MemberSettingsPageActions from './actions';
import MemberSettingsHeader from './MemberSettingsHeader';
import MemberSettingsContent from './MemberSettingsContent';
import MemberSettingsSider from './MemberSettingsSider';
import { selectData } from './selector';
import './MemberSettings.less';

const MemberSettings: React.FunctionComponent<MemberSettingsProps> = () => {
    const dispatch = useDispatch();

    const { isInitialized } = useSelector(selectData);

    useEffect(() => {
        dispatch(MemberSettingsPageActions.init());
        return () => {
            dispatch(MemberSettingsPageActions.terminate());
        };
    }, []);

    return (
        <ContentLayout
            header={<MemberSettingsHeader />}
            content={<MemberSettingsContent />}
            sider={<MemberSettingsSider />}
            // showSpinner={!isInitialized}
            className="member-settings-view"
        />
    );
};

export default MemberSettings;
