import React from 'react';
import { Button } from 'antd';
import { ModalActions } from '@actions';
import { navigate, withAppRoute } from '@utils';
import routes from '@constants/routes';
import constants from '@constants';

const WalletModalFooter = ({ dispatch, history, params }: any) => {
    return [
        <Button key="back" onClick={() => dispatch(ModalActions.closeModal())}>
            Cancel
        </Button>,
        <Button
            key="submit"
            type="primary"
            onClick={() => {
                dispatch(ModalActions.closeModal());
                navigate(
                    history,
                    withAppRoute(routes.ROUTES.COURSES_CREATE.ROUTE, {
                        app: constants.APPS.LEAGUE_APP,
                        routeProps: params,
                    })
                );
            }}
        >
            Add
        </Button>,
    ];
};
export default WalletModalFooter;
