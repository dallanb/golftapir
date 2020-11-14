import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { get as _get } from 'lodash';
import { ContentLayout } from '@layouts';
import constants from '@constants';
import { withS3URL } from '@utils';
import { ContentLayoutProps } from '@layouts/ContentLayout/types';
import { CompetitorProps } from './types';
import CompetitorPageActions from './actions';
import { selectData } from './selector';
import CompetitorSider from './CompetitorSider';
import CompetitorResults from './CompetitorResults';
import './Competitor.scss';

const Competitor: React.FunctionComponent<CompetitorProps> = () => {
    const dispatch = useDispatch();

    const history = useHistory();

    const [prevCompetitor] = useState(
        _get(history, ['location', 'state'], null)
    );

    useEffect(() => {
        dispatch(CompetitorPageActions.init(prevCompetitor.uuid));
        return () => {
            dispatch(CompetitorPageActions.terminate());
        };
    }, []);

    const { title, description, isInitialized, account } = useSelector(
        selectData
    );

    const renderAvatar = (name: string) => {
        const avatarProps: ContentLayoutProps['avatar'] = {
            name,
            size: 72,
            src: undefined,
            className: undefined,
        };
        const src = _get(account, ['avatar', 's3_filename'], null);
        const prevSrc = _get(prevCompetitor, ['src'], null);

        if (src) {
            avatarProps['src'] =
                src && withS3URL(src, constants.S3_FOLDERS.ACCOUNT.AVATAR);
        } else if (prevSrc) {
            avatarProps['src'] = prevSrc;
        }
        return avatarProps;
    };

    const renderSider = () => {
        return <CompetitorSider />;
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

        const first_name = _get(account, ['first_name'], '');
        const last_name = _get(account, ['last_name'], '');
        const name = `${first_name} ${last_name}`;
        if (name) {
            contentLayoutProps['title'] = name;
            contentLayoutProps['subTitle'] = description;
            contentLayoutProps['avatar'] = renderAvatar(name);
            contentLayoutProps['sider'] = renderSider();
        }
        return contentLayoutProps;
    };

    return (
        <ContentLayout
            {...renderContentLayoutProps()}
            showSpinner={!isInitialized}
            className="competitor-view"
        >
            <CompetitorResults />
        </ContentLayout>
    );
};

export default Competitor;
