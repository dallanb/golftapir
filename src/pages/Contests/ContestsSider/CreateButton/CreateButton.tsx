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
import CONSTANTS from '@locale/en-CA';

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
            title={CONSTANTS.COMMON.ACTIONS}
        >
            <Button block type="primary" onClick={handleClick}>
                {CONSTANTS.PAGES.CONTESTS.CREATE_CONTEST} <PlusCircleOutlined />
            </Button>
        </SiderComponentContent>
    );
};

export default CreateButton;
