import React from 'react';
import ComponentContent from '@layouts/ComponentContent';
import SiderLayoutContent from '@layouts/SiderLayout/SiderLayoutContent';
import CreateButton from './CreateButton';
import SearchInput from './SearchInput';
import { ContestsSiderContentProps } from './types';
import './ContestsSiderContent.less';

const ContestsSiderContent: React.FunctionComponent<ContestsSiderContentProps> = ({}) => {
    return (
        <SiderLayoutContent>
            <>
                    <SearchInput />
                    <CreateButton />
            </>
        </SiderLayoutContent>
    );
};

export default ContestsSiderContent;
