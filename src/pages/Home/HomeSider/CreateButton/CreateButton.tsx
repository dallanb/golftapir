import React from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from 'antd';
import { PlusCircleOutlined } from '@ant-design/icons';
import routes from '@constants/routes';
import { CreateButtonProps } from './types';
import { navigate, withAppRoute } from '@utils';
import constants from '@constants';
import { SiderComponentContent } from '@layouts/ComponentContent';
import './CreateButton.less';
import CONSTANTS from '@locale/en-CA';

const CreateButton: React.FunctionComponent<CreateButtonProps> = () => {
    const history = useHistory();

    const handleClick = () => {
        navigate(
            history,
            withAppRoute(routes.ROUTES.LEAGUES_CREATE.ROUTE, {
                app: constants.APPS.MEMBER_APP,
            })
        );
    };

    return (
        <SiderComponentContent
            title={CONSTANTS.COMMON.ACTIONS}
            className="create-button"
            bodyClassName={'create-button-body'}
        >
            <Button block type="primary" onClick={handleClick}>
                {CONSTANTS.PAGES.HOME.CREATE_LEAGUE} <PlusCircleOutlined />
            </Button>
        </SiderComponentContent>
    );
};

export default CreateButton;
