import React from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { get as _get } from 'lodash';
import { Button } from 'antd';
import { ScorecardParticipantProps } from './types';
import { Avatar } from '@components';
import { selectAccountsHash } from '@pages/Contest/selector';
import { getName, withS3URL } from '@utils';
import routes from '@constants/routes';
import './ScorecardParticipant.less';

const ScorecardParticipant: React.FunctionComponent<ScorecardParticipantProps> = ({
    user,
}) => {
    const history = useHistory();
    const accountsHash = useSelector(selectAccountsHash);
    const account = _get(accountsHash, [user], null);
    const avatar = _get(account, ['avatar', 's3_filename'], null);
    const name = getName(account, '');
    return (
        <div className="scorecard-participant">
            <div className="scorecard-participant-user">
                <div className="scorecard-participant-user-avatar">
                    <Avatar
                        src={avatar && withS3URL(avatar)}
                        name={name}
                        size={84}
                    />
                </div>
                <div className="scorecard-participant-user-name">{name}</div>
            </div>
            <div className="scorecard-participant-buttons">
                <div className="scorecard-participant-button message">
                    <Button block size={'small'} type="primary" key="message">
                        Message
                    </Button>
                </div>
                <div className="scorecard-participant-button profile">
                    <Button
                        block
                        size={'small'}
                        type="primary"
                        key="profile"
                        onClick={() =>
                            history.push(routes.MEMBER_APP.COMPETITOR.ROUTE, {
                                ...account,
                            })
                        }
                    >
                        Profile
                    </Button>
                </div>
            </div>
        </div>
    );
};
export default ScorecardParticipant;
