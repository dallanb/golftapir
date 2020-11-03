import React from 'react';
import { Button } from 'antd';
import { PlusCircleOutlined } from '@ant-design/icons';
import { CreateContestButtonProps } from './types';
import './CreateContestButton.scss';

class CreateContestButton extends React.PureComponent<
    CreateContestButtonProps
> {
    handleClick = () => {
        const { history } = this.props;
        history.push('/app/contests/create');
    };

    render() {
        return (
            <Button onClick={this.handleClick}>
                Create Contest <PlusCircleOutlined />
            </Button>
        );
    }
}

export default CreateContestButton;
