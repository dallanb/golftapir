import React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { ContestListProps } from './types';
import { List } from '../../../components';
import { ContestStateInterface } from '../../../reducers/types';
import './ContestList.scss';

class ContestList extends React.PureComponent<ContestListProps> {
    render() {
        const { total, data } = this.props;
        console.log(this.props);
        return <List itemCount={total} itemSize={150} itemData={data} />;
    }
}

const mapStateToProps = ({ contest }: ContestStateInterface) => {
    return {
        total: _.get(contest, ['metadata', 'total_count'], 0),
        data: _.get(contest, ['data'], []),
    };
};
export default connect(mapStateToProps)(ContestList);
