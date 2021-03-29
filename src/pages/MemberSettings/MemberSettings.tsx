import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { AppLayoutContent } from '@layouts/AppLayout';
import { MemberSettingsProps } from './types';
import MemberSettingsPageActions from './actions';
import MemberSettingsContent from './MemberSettingsContent';
import MemberSettingsSider from './MemberSettingsSider';
import './MemberSettings.less';

const MemberSettings: React.FunctionComponent<MemberSettingsProps> = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(MemberSettingsPageActions.init());
        return () => {
            dispatch(MemberSettingsPageActions.terminate());
        };
    }, []);

    return (
        <AppLayoutContent
            content={<MemberSettingsContent />}
            sider={<MemberSettingsSider />}
            className="member-settings-view"
        />
    );
};

export default MemberSettings;
