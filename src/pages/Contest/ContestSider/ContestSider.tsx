import React from 'react';
import { useSelector } from 'react-redux';
import { ContestSiderProps } from './types';
import { selectMe } from '@selectors/BaseSelector';
import ContestSiderSteps from './ContestSiderSteps';
import ContestUser from './ContestUser';
import './ContestSider.scss';

const ContestSider: React.FunctionComponent<ContestSiderProps> = () => {
    const me = useSelector(selectMe);

    return (
        <div>
            <ContestUser user={me} />
            <ContestSiderSteps />
        </div>
    );
};

export default ContestSider;
