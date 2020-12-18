import React from 'react';
import { useSelector } from 'react-redux';
import { get as _get } from 'lodash';
import { ScorecardParticipantProps } from './types';
import { Avatar } from '@components';
import { selectAccountsHash } from '@pages/Contest/selector';
import { getName, withS3URL } from '@utils';
import './ScorecardParticipant.less';

const ScorecardParticipant: React.FunctionComponent<ScorecardParticipantProps> = ({
    user,
}) => {
    console.log(user);
    const accountsHash = useSelector(selectAccountsHash);
    const account = _get(accountsHash, [user], null);
    const avatar = _get(account, ['avatar', 's3_filename'], null);
    const name = getName(account, '');
    return (
        <div className="scorecard-participant">
            <div className="scorecard-participant-avatar">
                <Avatar src={avatar && withS3URL(avatar)} name={name} />
            </div>
            <div className="scorecard-participant-name">{name}</div>
        </div>
    );
};
export default ScorecardParticipant;
