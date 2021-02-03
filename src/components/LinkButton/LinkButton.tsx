import React from 'react';
import { Button } from 'antd';
import classnames from 'classnames';
import { LinkButtonProps } from './types';
import './LinkButton.less';

const LinkButton: React.FunctionComponent<LinkButtonProps> = ({
    text,
    buttonText,
    onClick,
    className,
    wrapperClassName,
    textClassName,
}) => {
    const cx = classnames('link-button', className);
    const wrapperCx = classnames('link-button-wrapper', wrapperClassName);
    const textCx = classnames(
        'link-button-text',
        { hidden: !text },
        textClassName
    );
    return (
        <div className={wrapperCx}>
            <div className={textCx}>{text}</div>
            <Button type="link" onClick={onClick} className={cx}>
                {buttonText}
            </Button>
        </div>
    );
};

export default LinkButton;
