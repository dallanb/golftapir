import React from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from 'antd';
import { PlusCircleOutlined } from '@ant-design/icons';
import routes from '@constants/routes';
import { CreateButtonProps } from './types';
import { withAppRoute } from '@utils';
import constants from '@constants';
import ComponentContent from '@layouts/ComponentContent';
import './CreateButton.less';

const CreateButton: React.FunctionComponent<CreateButtonProps> = () => {
    const history = useHistory();

    const handleClick = () => {
        history.push(
            withAppRoute(routes.ROUTES.LEAGUES_CREATE.ROUTE, {
                app: constants.APPS.MEMBER_APP,
            })
        );
    };

    return (
        <ComponentContent
            title={'Actions'}
            className="create-button"
            bodyClassName={'create-button-body'}
        >
            <Button block type="primary" onClick={handleClick}>
                Create League <PlusCircleOutlined />
            </Button>
        </ComponentContent>
    );
};

export default CreateButton;
