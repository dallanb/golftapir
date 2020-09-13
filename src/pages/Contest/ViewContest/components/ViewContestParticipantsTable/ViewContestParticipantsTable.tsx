import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { ViewContestParticipantsTableProps } from './types';
import './ViewContestParticipantsTable.scss';
import Grid from '../../../../../components/Grid';

class ViewContestParticipantsTable extends React.PureComponent<
    ViewContestParticipantsTableProps
> {
    render() {
        return (
            <div>
                C'est un table
                {/*<Grid*/}
                {/*    hasNextPage={}*/}
                {/*    loadMoreItems={}*/}
                {/*    isItemLoaded={}*/}
                {/*    scrollState={}*/}
                {/*    setScrollRowAndColumn={}*/}
                {/*    itemCount={}*/}
                {/*    itemData={}*/}
                {/*/>*/}
            </div>
        );
    }
}

const mapStateToProps = ({ contest }: any) => {
    return {
        data: _.get(contest, ['data'], undefined),
    };
};

export default connect(mapStateToProps)(ViewContestParticipantsTable);
