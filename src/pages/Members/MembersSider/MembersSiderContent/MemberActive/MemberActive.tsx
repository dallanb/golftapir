import React from 'react';
import { useSelector } from 'react-redux';
import ComponentContent from '@layouts/ComponentContent';
import { ContestSiderActiveProps } from './types';
import { selectIsLeagueOwner } from '@apps/LeagueApp/selector';
import SearchSelectInput from './SearchSelectInput';
import Invites from './Invites';
import './MemberActive.less';

const MemberActive: React.FunctionComponent<ContestSiderActiveProps> = () => {
    const isLeagueOwner = useSelector(selectIsLeagueOwner);

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
