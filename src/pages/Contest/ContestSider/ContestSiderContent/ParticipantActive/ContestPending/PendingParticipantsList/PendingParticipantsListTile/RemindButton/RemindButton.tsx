import React from 'react';
import { Button } from 'antd';
import { RemindButtonProps } from './types';
import './RemindButton.scss';
import { useDispatch } from 'react-redux';

const RemindButton: React.FunctionComponent<RemindButtonProps> = ({ uuid }) => {
    const dispatch = useDispatch();
    const handleClick = (uuid: string) => {};

    return <Button onClick={() => handleClick(uuid)}>Remind</Button>;
};

export default RemindButton;
