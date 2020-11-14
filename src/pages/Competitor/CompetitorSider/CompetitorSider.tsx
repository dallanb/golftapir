import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { get as _get } from 'lodash';
import { selectMe } from '@selectors/BaseSelector';
import { withS3URL } from '@utils';
import { SiderLayout } from '@layouts';
import { SiderLayoutProps } from '@layouts/SiderLayout/types';
import { ContentLayoutProps } from '@layouts/ContentLayout/types';
import constants from '@constants';
import { selectAccount } from '../selector';
import CompetitorSiderTitle from './CompetitorSiderTitle';
import CompetitorActions from './CompetitorActions';
import { CompetitorSiderProps } from './types';
import './CompetitorSider.scss';

const CompetitorSider: React.FunctionComponent<CompetitorSiderProps> = () => {
    const me = useSelector(selectMe);
    const history = useHistory();
    const account = useSelector(selectAccount);

    const generateActions = () => {
        const actions = [];
        const uuid = _get(account, ['uuid'], null);
        if (uuid) {
            actions.push({
                key: constants.ACTION.CHALLENGE.KEY,
                onClick: () =>
                    history.push(`/app${constants.ROUTES.CONTESTS_CREATE}`, {
                        participant_uuid: uuid,
                    }),
            });
        }
        return actions;
    };

    const renderTitle = (titleProps: { name: string }) => (
        <CompetitorSiderTitle {...titleProps} />
    );

    const renderAvatar = (name: string, src?: string) => {
        const avatarProps: ContentLayoutProps['avatar'] = {
            name,
            src,
            size: 54,
            className: undefined,
        };
        return avatarProps;
    };

    const renderContentLayoutProps = () => {
        const siderLayoutProps: SiderLayoutProps = {
            title: undefined,
            avatar: undefined,
        };

        const name = `${me.first_name} ${me.last_name}`;
        const s3_filename = _get(me, ['avatar', 's3_filename'], undefined);
        const src =
            s3_filename &&
            withS3URL(s3_filename, constants.S3_FOLDERS.ACCOUNT.AVATAR);
        siderLayoutProps['title'] = renderTitle({ name });
        siderLayoutProps['avatar'] = renderAvatar(name, src);

        return siderLayoutProps;
    };

    const renderContent = () => {
        return <CompetitorActions actions={generateActions()} />;
    };
    return (
        <SiderLayout
            {...renderContentLayoutProps()}
            showSpinner={false}
            // className="competitor-sider"
        >
            {renderContent()}
        </SiderLayout>
    );
};

export default CompetitorSider;
