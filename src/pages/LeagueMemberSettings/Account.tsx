import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { get as _get } from 'lodash';
import { ContentLayout } from '@layouts';
import { LeagueMemberSettingsProps } from './types';
import LeagueMemberSettingsPageActions from './actions';
import LeagueMemberSettingsHeader from './LeagueMemberSettingsHeader';
import LeagueMemberSettingsContent from './LeagueMemberSettingsContent';
import LeagueMemberSettingsSider from './LeagueMemberSettingsSider';
import { selectData } from './selector';
import './LeagueMemberSettings.less';

const LeagueMemberSettings: React.FunctionComponent<LeagueMemberSettingsProps> = () => {
    const dispatch = useDispatch();

    const { isInitialized } = useSelector(selectData);

    useEffect(() => {
        dispatch(LeagueMemberSettingsPageActions.init());
        return () => {
            dispatch(LeagueMemberSettingsPageActions.terminate());
        };
    }, []);

    return (
        <ContentLayout
            header={<LeagueMemberSettingsHeader />}
            content={<LeagueMemberSettingsContent />}
            sider={<LeagueMemberSettingsSider />}
            // showSpinner={!isInitialized}
            className="account-view"
        />
    );
};

export default LeagueMemberSettings;
