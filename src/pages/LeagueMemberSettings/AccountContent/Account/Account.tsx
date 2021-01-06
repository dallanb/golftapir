import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import LeagueMemberSettingsForm from './LeagueMemberSettingsForm';
import { LeagueMemberSettingsProps } from './types';
import LeagueMemberSettingsPageContentLeagueMemberSettingsActions from './actions';
import { selectData } from './selector';
import ComponentContent from '@layouts/ComponentContent';
import './LeagueMemberSettings.less';

const LeagueMemberSettings: React.FunctionComponent<LeagueMemberSettingsProps> = ({}) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(
            LeagueMemberSettingsPageContentLeagueMemberSettingsActions.init()
        );
        return () => {
            dispatch(
                LeagueMemberSettingsPageContentLeagueMemberSettingsActions.terminate()
            );
        };
    }, []);

    const { isInitialized } = useSelector(selectData);

    return (
        <ComponentContent showSpinner={!isInitialized} className="account">
            <LeagueMemberSettingsForm />
        </ComponentContent>
    );
};

export default LeagueMemberSettings;
