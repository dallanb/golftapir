import React from 'react';
import { Tabs } from 'antd';
import { ContentLayoutContent } from '@layouts';
import { MemberContentProps } from './types';
import MemberResults from './MemberResults';
import MemberInfo from './MemberInfo';
import CONSTANTS from '@locale/en-CA';
import './MemberContent.less';

const { TabPane } = Tabs;

const MemberContent: React.FunctionComponent<MemberContentProps> = ({}) => {
    function callback(key: string) {
        console.log(key);
    }
    return (
        <ContentLayoutContent>
            <Tabs defaultActiveKey="2" onChange={callback}>
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
