import React from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from 'antd';
import { PlusCircleOutlined } from '@ant-design/icons';
import { CreateContestButtonProps } from './types';
import './CreateContestButton.scss';

const CreateContestButton: React.FunctionComponent<CreateContestButtonProps> = () => {
    const history = useHistory();

    const handleClick = () => {
        history.push('/app/contests/create');
    };

    return (
        <div className="contest-create-button">
            <Button block type="primary" onClick={handleClick}>
                Create Contest <PlusCircleOutlined />
            </Button>
        </div>
    );
};

export default CreateContestButton;
