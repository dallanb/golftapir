import React from 'react';
import { useSelector } from 'react-redux';
import ComponentContent from '@layouts/ComponentContent';
import { ContestSiderActiveProps } from './types';
import { selectIsLeagueOwner } from '@apps/LeagueApp/selector';
import SearchSelectInput from './SearchSelectInput';
import './MemberActive.less';

const MemberActive: React.FunctionComponent<ContestSiderActiveProps> = () => {
    const isLeagueOwner = useSelector(selectIsLeagueOwner);

    if (!isLeagueOwner) {
        return null;
    }
    return (
        <ComponentContent className="search-input-component-content">
            <SearchSelectInput />
        </ComponentContent>
    );
};

export default MemberActive;
