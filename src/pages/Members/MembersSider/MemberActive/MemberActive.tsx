import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ContestSiderActiveProps } from './types';
import { selectIsLeagueOwner } from '@selectors/AppSelector';
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
