import React from 'react';
import SiderLayoutContent from '@layouts/SiderLayout/SiderLayoutContent';
import CreateButton from './CreateButton';
import SearchInput from './SearchInput';
import { ContestsSiderProps } from './types';
import './ContestsSider.less';

const ContestsSider: React.FunctionComponent<ContestsSiderProps> = ({}) => {
    return (
        <SiderLayoutContent>
            <>
                <SearchInput />
                <CreateButton />
            </>
        </SiderLayoutContent>
    );
};

export default ContestsSider;
