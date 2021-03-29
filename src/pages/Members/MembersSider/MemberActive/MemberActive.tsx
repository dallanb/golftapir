import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ContestSiderActiveProps } from './types';
import { selectIsLeagueOwner } from '@selectors/AppSelector';
import SearchSelectInput from './SearchSelectInput';
import Invites from './Invites';
import { SpinnerActions } from '@actions';
import CONSTANTS from '@locale/en-CA';
import './MemberActive.less';

const MemberActive: React.FunctionComponent<ContestSiderActiveProps> = () => {
    const dispatch = useDispatch();
    const isLeagueOwner = useSelector(selectIsLeagueOwner);
    dispatch(SpinnerActions.openSpinner(CONSTANTS.PAGES.MEMBERS.INVITE.WAIT));
    if (!isLeagueOwner) {
        return null;
    }
    return (
        <>
            <SearchSelectInput />
            <Invites />
        </>
    );
};

export default MemberActive;
