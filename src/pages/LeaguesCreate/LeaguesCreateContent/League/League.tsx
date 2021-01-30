import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { get as _get } from 'lodash';
import LeagueForm from './LeagueForm';
import { LeagueProps } from './types';
import LeaguesCreatePageContentLeagueActions from './actions';
import { selectData } from './selector';
import ComponentContent from '@layouts/ComponentContent';
import routes from '@constants/routes';
import { OverlaySpin } from '@components';
import './League.less';
import { withAppRoute } from '@utils';
import constants from '@constants';

const League: React.FunctionComponent<LeagueProps> = ({}) => {
    const dispatch = useDispatch();
    const history = useHistory();

    const options = _get(history, ['location', 'state'], undefined);

    const { isSubmitted, isSubmitting, result } = useSelector(selectData);

    useEffect(() => {
        if (isSubmitted && result) {
            history.push(
                withAppRoute(routes.ROUTES.LEAGUES.ROUTE, {
                    app: constants.APPS.MEMBER_APP,
                })
            );
        }
    });

    useEffect(() => {
        dispatch(LeaguesCreatePageContentLeagueActions.init(options));
        return () => {
            dispatch(LeaguesCreatePageContentLeagueActions.terminate());
        };
    }, []);

    const { isInitialized } = useSelector(selectData);

    return (
        <ComponentContent
            title={'Create League'}
            showSpinner={!isInitialized}
            className="league"
        >
            <LeagueForm />
            <OverlaySpin visible={isSubmitting} />
        </ComponentContent>
    );
};

export default League;
