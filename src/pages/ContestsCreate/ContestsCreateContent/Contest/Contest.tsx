import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { get as _get } from 'lodash';
import ContestForm from './ContestForm';
import { ContestProps } from './types';
import ContestsCreatePageContentContestActions from './actions';
import { selectData } from './selector';
import ComponentContent from '@layouts/ComponentContent';
import routes from '@constants/routes';
import { navigate, withAppRoute } from '@utils';
import CONSTANTS from '@locale/en-CA';
import { useSpinner } from '@hooks';
import './Contest.less';

const Contest: React.FunctionComponent<ContestProps> = ({}) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const params = useParams();

    const options = _get(history, ['location', 'state'], undefined);

    const { isSubmitted, isSubmitting, result } = useSelector(selectData);
    useSpinner(isSubmitting, CONSTANTS.PAGES.CONTESTS_CREATE.FORM.SUBMITTING);

    useEffect(() => {
        if (isSubmitted && result) {
            navigate(
                history,
                withAppRoute(routes.ROUTES.CONTEST.ROUTE, {
                    routeProps: {
                        ...params,
                        contest_uuid: result.uuid,
                    },
                }),
                result
            );
        }
    });

    useEffect(() => {
        dispatch(ContestsCreatePageContentContestActions.init(options));
        return () => {
            dispatch(ContestsCreatePageContentContestActions.terminate());
        };
    }, []);

    const { isInitialized } = useSelector(selectData);

    return (
        <ComponentContent
            title={CONSTANTS.PAGES.CONTESTS_CREATE.FORM.TITLE}
            showSpinner={!isInitialized}
            className="contest"
        >
            <ContestForm />
        </ComponentContent>
    );
};

export default Contest;
