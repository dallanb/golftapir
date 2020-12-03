import React from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from 'antd';
import { PlusCircleOutlined } from '@ant-design/icons';
import constants from '@constants';
import { CreateButtonProps } from './types';
import './CreateButton.scss';

const CreateButton: React.FunctionComponent<CreateButtonProps> = () => {
    const history = useHistory();

    const handleClick = () => {
        history.push(`/app${constants.ROUTES.CONTESTS_CREATE.ROUTE}`);
    };

    return (
        <div className="create-button">
            <Button block type="primary" onClick={handleClick}>
                Create Contest <PlusCircleOutlined />
            </Button>
        </div>
    );
};

export default CreateButton;
