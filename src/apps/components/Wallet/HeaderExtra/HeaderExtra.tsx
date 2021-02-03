import React from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { HeaderExtraProps } from './types';
import './HeaderExtra.less';
import { PlusCircleFilled } from '@ant-design/icons/lib';

const HeaderExtra: React.FunctionComponent<HeaderExtraProps> = () => {
    const history = useHistory();

    return (
        <div className="header-extra">
            <div className="header-extra-button">
                <Button
                    onClick={() => null}
                    type="default"
                    shape="round"
                    icon={<PlusOutlined />}
                >
                    Add
                </Button>
            </div>
        </div>
    );
};

export default HeaderExtra;
