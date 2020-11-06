import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { get as _get } from 'lodash';
import { Tag } from 'antd';
import { ContestProps } from './types';
import { selectData } from './selector';
import { ContentLayout } from '@layouts';
import { ContentLayoutProps } from '@layouts/ContentLayout/types';
import constants from '@constants';
import { mapStatusColour, withS3URL } from '@utils';
import ContestPageActions from './actions';
import ContestParticipantsTable from './ContestParticipantsTable';
import ContestSider from './ContestSider';
import ContestSubTitle from './ContestSubTitle';
import ContestTitle from './ContestTitle';
import './Contest.scss';

const Contest: React.FunctionComponent<ContestProps> = () => {
    const dispatch = useDispatch();

    const history = useHistory();

    const [prevContest] = useState(_get(history, ['location', 'state'], null));

    useEffect(() => {
        dispatch(ContestPageActions.init(prevContest.uuid));
        return () => {
            dispatch(ContestPageActions.terminate());
        };
    }, []);

    const { isInitialized, contest } = useSelector(selectData);

    const renderTitle = (title: string) => {
        const time = _get(
            contest,
            ['start_time'],
            _get(prevContest, ['start_time'], null)
        );

        return <ContestTitle title={title} time={time} />;
    };

    const renderSubTitle = (uuid: string) => {
        return <ContestSubTitle uuid={uuid} />;
    };

    const renderAvatar = (name: string) => {
        const avatarProps: ContentLayoutProps['avatar'] = {
            name,
            size: 72,
            src: undefined,
            className: undefined,
        };
        const src = _get(contest, ['avatar', 's3_filename'], null);
        const prevSrc = _get(prevContest, ['src'], null);

        if (src) {
            avatarProps['src'] =
                src && withS3URL(src, constants.S3_FOLDERS.CONTEST.AVATAR);
        } else if (prevSrc) {
            avatarProps['src'] = prevSrc;
        }
        return avatarProps;
    };

    const renderSider = () => {
        return <ContestSider />;
    };

    const renderContentLayoutProps = () => {
        const contentLayoutProps: ContentLayoutProps = {
            title: undefined,
            subTitle: undefined,
            avatar: undefined,
            tags: undefined,
            extra: undefined,
            sider: undefined,
        };

        const uuid = _get(contest, ['uuid'], _get(prevContest, ['uuid'], null));
        const name = _get(contest, ['name'], _get(prevContest, ['name'], ''));
        if (name) {
            contentLayoutProps['title'] = renderTitle(name);
            contentLayoutProps['subTitle'] = renderSubTitle(uuid);
            contentLayoutProps['avatar'] = renderAvatar(name);
            contentLayoutProps['sider'] = renderSider();
        }
        return contentLayoutProps;
    };

    return (
        <ContentLayout
            {...renderContentLayoutProps()}
            showSpinner={!isInitialized}
            className="contest-view"
        >
            <ContestParticipantsTable />
        </ContentLayout>
    );
};

export default Contest;
