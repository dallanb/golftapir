import React from 'react';
import { useSelector } from 'react-redux';
import { get as _get } from 'lodash';
import { selectMe } from '@selectors/BaseSelector';
import { withS3URL } from '@utils';
import { SiderLayout } from '@layouts';
import { SiderLayoutProps } from '@layouts/SiderLayout/types';
import { ContentLayoutProps } from '@layouts/ContentLayout/types';
import constants from '@constants';
import ContestsSiderTitle from './ContestsSiderTitle';
import ContestsCreateButton from './ContestsCreateButton';
import { ContestsSiderProps } from './types';
import './ContestsSider.scss';

const ContestsSider: React.FunctionComponent<ContestsSiderProps> = () => {
    const me = useSelector(selectMe);

    const renderTitle = (titleProps: { name: string }) => (
        <ContestsSiderTitle {...titleProps} />
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
        return <ContestsCreateButton />;
    };
    return (
        <SiderLayout
            {...renderContentLayoutProps()}
            showSpinner={false}
            // className="contests-CompetitorSider"
        >
            {renderContent()}
        </SiderLayout>
    );
};

export default ContestsSider;
