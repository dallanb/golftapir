import React from 'react';
import { useSelector } from 'react-redux';
import { Spin } from 'antd';
import { MessageSpinnerProps } from './types';
import { selectSpinnerData } from '@selectors/SpinnerSelector';
import './MessageSpinner.less';

const MessageSpinner: React.FunctionComponent<MessageSpinnerProps> = () => {
    const { isOpen, message } = useSelector(selectSpinnerData);
    return isOpen ? <Spin tip={message} className="message-spinner" /> : null;
};

export default MessageSpinner;
