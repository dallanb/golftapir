import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ContestsList from './ContestsList';
import { ContestsProps } from './types';
import ContestsPageContentContestsActions from './actions';
import { selectData } from './selector';
import ComponentContent from '@layouts/ComponentContent';
import './Contests.less';
import { selectMyLeagueUUID } from '@selectors/BaseSelector';
import { ContentLayoutContent } from '@layouts';
import InvitesList from '@pages/Members/MembersSider/MembersSiderContent/MemberActive/Invites/InvitesList';

const Contests: React.FunctionComponent<ContestsProps> = ({}) => {
    const dispatch = useDispatch();
    const ref = useRef(null);
    const leagueUUID = useSelector(selectMyLeagueUUID);

    useEffect(() => {
        dispatch(
            ContestsPageContentContestsActions.init({ league_uuid: leagueUUID })
        );
        return () => {
            dispatch(ContestsPageContentContestsActions.terminate());
        };
    }, []);

    const {
        isInitialized,
        isFetching,
        data = [],
        metadata = [],
        options = undefined,
    } = useSelector(selectData);

    const dimensions = {
        height: Math.max(200, data.length * 100 + 63),
    };

    return (
        <ComponentContent
            componentRef={ref}
            showSpinner={!isInitialized}
            className="contests"
            style={dimensions}
            title={'Contests List'}
        >
            <ContestsList
                containerRef={ref}
                data={data}
                metadata={metadata}
                options={options}
                isFetching={isFetching}
            />
        </ComponentContent>
    );
};

export default Contests;
