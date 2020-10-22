import React from 'react';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { get as _get } from 'lodash';
import { ContentLayout } from '@layouts';
import {
    ContestMatchupProps,
    ContestMatchupState,
    StateInterface,
} from './types';
import ContestMatchupPageActions from './actions';
import ContestMatchupScorecard from './ContestMatchupScorecard';
import ContestMatchupCarousel from './ContestMatchupCarousel';
import './ContestMatchup.scss';
import { Tabs } from 'antd';

class ContestMatchup extends React.PureComponent<
    ContestMatchupProps,
    ContestMatchupState
> {
    constructor(props: ContestMatchupProps) {
        super(props);
        this.state = {
            contest: _get(
                props,
                ['history', 'location', 'state', 'contest'],
                null
            ),
        };
    }

    componentDidMount() {
        const { init } = this.props;
        const { contest } = this.state;
        init(contest);
    }

    componentWillUnmount() {
        const { terminate } = this.props;
        terminate();
    }

    getTabs = (sheet: any[], participants: any[]) =>
        sheet.map((sheetUser: any, index) => {
            const participant = participants.find(
                ({ membership_uuid }: any) =>
                    membership_uuid === sheetUser.participant
            );
            const tab = participant ? participant.last_name : '';
            return (
                <Tabs.TabPane tab={tab} key={index}>
                    <ContestMatchupCarousel sheetUser={sheetUser} />
                </Tabs.TabPane>
            );
        });

    render() {
        const {
            title,
            description,
            isInitialized,
            sheet,
            participants,
        } = this.props;
        return (
            <ContentLayout
                title={title}
                subTitle={description}
                showSpinner={!isInitialized}
            >
                <div className="contest-matchup-page-view">
                    <ContestMatchupScorecard />
                    <Tabs type="card" animated={false}>
                        {this.getTabs(sheet, participants)}
                    </Tabs>
                </div>
            </ContentLayout>
        );
    }
}

const mapStateToProps = ({ contestMatchupPage }: StateInterface) => {
    const {
        title,
        description,
        isInitialized,
        score,
        participants = [],
    } = contestMatchupPage;
    const sheet = _get(score, ['log', 'sheet'], []);
    return {
        title,
        description,
        isInitialized,
        sheet,
        participants,
    };
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        init(contest: any) {
            return dispatch(ContestMatchupPageActions.init(contest));
        },
        terminate() {
            return dispatch(ContestMatchupPageActions.terminate());
        },
    };
};

export default compose(
    withRouter,
    connect(mapStateToProps, mapDispatchToProps)
)(ContestMatchup);
