import React from 'react';
import { useSelector } from 'react-redux';
import { Tabs } from 'antd';
import { ContentLayoutContent } from '@layouts';
import { MemberContentProps } from './types';
import MemberResults from './MemberResults';
import MemberInfo from './MemberInfo';
import CONSTANTS from '@locale/en-CA';
import { selectData } from '../selector';
import './MemberContent.less';

const { TabPane } = Tabs;

const MemberContent: React.FunctionComponent<MemberContentProps> = ({}) => {
    const { isInitialized } = useSelector(selectData);

    return (
        <ContentLayoutContent showSpinner={!isInitialized}>
            <Tabs defaultActiveKey="1">
                <TabPane tab={CONSTANTS.PAGES.MEMBER.TABS.INFO} key="1">
                    <MemberInfo />
                </TabPane>
                <TabPane tab={CONSTANTS.PAGES.MEMBER.TABS.RECENT} key="2">
                    <MemberResults />
                </TabPane>
                <TabPane tab={CONSTANTS.PAGES.MEMBER.TABS.RESULTS} key="3">
                    <div />
                </TabPane>
            </Tabs>
        </ContentLayoutContent>
    );
};

export default MemberContent;
