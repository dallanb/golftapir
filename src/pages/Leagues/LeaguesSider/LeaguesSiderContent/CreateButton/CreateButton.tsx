import React from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from 'antd';
import { PlusCircleOutlined } from '@ant-design/icons';
import routes from '@constants/routes';
import { CreateButtonProps } from './types';
import './CreateButton.less';

const CreateButton: React.FunctionComponent<CreateButtonProps> = () => {
    const history = useHistory();

    const handleClick = () => {
        history.push(routes.MEMBER_APP.LEAGUES_CREATE.ROUTE);
    };

    return (
        <div className="create-button">
            <Button block type="primary" onClick={handleClick}>
                Create League <PlusCircleOutlined />
            </Button>
        </div>
    );
};

export default CreateButton;