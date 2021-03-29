import React from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Button } from 'antd';
import { PlusCircleOutlined } from '@ant-design/icons';
import routes from '@constants/routes';
import { CreateButtonProps } from './types';
import { navigate, withAppRoute } from '@utils';
import { selectMyLeagueUUID } from '@selectors/BaseSelector';
import { SiderComponentContent } from '@layouts/ComponentContent';
import './CreateButton.less';

const CreateButton: React.FunctionComponent<CreateButtonProps> = () => {
    const history = useHistory();
    const leagueUUID = useSelector(selectMyLeagueUUID);

    const handleClick = () => {
        navigate(
            history,
            withAppRoute(routes.ROUTES.CONTESTS_CREATE.ROUTE, {
                routeProps: { league_uuid: leagueUUID },
            })
        );
    };

    return (
        <SiderComponentContent
            className="create-button space"
            bodyClassName={'create-button-body'}
            title={'Actions'}
        >
            <Button block type="primary" onClick={handleClick}>
                Create Contest <PlusCircleOutlined />
            </Button>
        </SiderComponentContent>
    );
};

export default CreateButton;
