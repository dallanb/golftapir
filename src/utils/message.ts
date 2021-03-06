import { message as antdMessage } from 'antd';
import { ReactNode } from 'react';

class message {
    success = (content: ReactNode, duration: number = 1.5) => {
        antdMessage.success({ content, duration, className: 'success' });
    };
    error = (content: ReactNode, duration: number = 1.5) => {
        antdMessage.error({ content, duration, className: 'error' });
    };
}

export default new message();
