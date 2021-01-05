import React from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from 'antd';
import { PlusCircleOutlined } from '@ant-design/icons';
import routes from '@constants/routes';
import { CreateButtonProps } from './types';
import './CreateButton.less';
import { withAppRoute } from '@utils';
import { useSelector } from 'react-redux';
import { selectMyLeagueUUID } from '@selectors/BaseSelector';

const CreateButton: React.FunctionComponent<CreateButtonProps> = () => {
    const history = useHistory();
    const leagueUUID = useSelector(selectMyLeagueUUID);

    const handleClick = () => {
        history.push(
            withAppRoute(routes.ROUTES.CONTESTS_CREATE.ROUTE, {
                routeProps: { league_uuid: leagueUUID },
            })
        );
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
