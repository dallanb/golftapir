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
import { navigate, withAppRoute } from '@utils';
import constants from '@constants';
import CONSTANTS from '@locale/en-CA';

const League: React.FunctionComponent<LeagueProps> = ({}) => {
    const dispatch = useDispatch();
    const history = useHistory();

    const options = _get(history, ['location', 'state'], undefined);

    const { isSubmitted, isSubmitting, result } = useSelector(selectData);

    useEffect(() => {
        if (isSubmitted && result) {
            navigate(
                history,
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
            title={CONSTANTS.PAGES.LEAGUES_CREATE.FORM.TITLE}
            showSpinner={!isInitialized}
            className="league-component-content"
        >
            <LeagueForm />
            <OverlaySpin visible={isSubmitting} />
        </ComponentContent>
    );
};

export default League;
