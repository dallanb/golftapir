import React from 'react';
import { useSelector } from 'react-redux';
import { get as _get } from 'lodash';
import { selectMe } from '@selectors/BaseSelector';
import { withS3URL } from '@utils';
import { SiderLayout } from '@layouts';
import { SiderLayoutProps } from '@layouts/SiderLayout/types';
import { ContentLayoutProps } from '@layouts/ContentLayout/types';
import constants from '@constants';
import ContestSiderTitle from './ContestSiderTitle';
import { selectMyParticipant } from '../selector';
import { ContestSiderProps } from './types';
import contestSiderContentRenderer from './contestSiderContentRenderer';
import './ContestSider.scss';

const ContestSider: React.FunctionComponent<ContestSiderProps> = () => {
    const me = useSelector(selectMe);
    const participant = useSelector(selectMyParticipant);
    console.log(participant);
    const renderTitle = (titleProps: { name: string; status: string }) => (
        <ContestSiderTitle {...titleProps} />
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
        const status = _get(
            participant,
            ['status'],
            constants.STATUS.SPECTATOR.KEY
        );
        siderLayoutProps['title'] = renderTitle({ name, status });
        siderLayoutProps['avatar'] = renderAvatar(name, src);

        return siderLayoutProps;
    };

    const renderContent = () => {
        const status = _get(
            participant,
            ['status'],
            constants.STATUS.SPECTATOR.KEY
        );
        return contestSiderContentRenderer(status);
    };
    return (
        <SiderLayout
            {...renderContentLayoutProps()}
            showSpinner={!participant}
            className="contest-sider"
        >
            {renderContent()}
        </SiderLayout>
    );
};

export default ContestSider;
