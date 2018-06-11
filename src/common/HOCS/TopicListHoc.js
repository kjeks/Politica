import React, {Component} from 'react';
import {connect} from 'react-redux';
import CommonActions from "../CommonActions";

export default function (TopicListComponent) {
    class TopicListHoc extends Component {
        constructor (props) {
            super(props);
            this.props.fetchTopicLists(props.userId);
        }
        render () {
            return (
                <TopicListComponent{...this.props}/>
            );
        }
    }
    function mapStateToProps (state) {
        return {
            favoriteTopics: state.getIn(['TopicListReducer', 'favoriteTopics']),
            otherTopics: state.getIn(['TopicListReducer', 'otherTopics'])
        }
    }
    function mapDispatchToProps (dispatch) {
        return {
            fetchTopicLists: (userId) => dispatch(CommonActions.fetchTopicList(userId))}
        }

    return connect(mapStateToProps, mapDispatchToProps)(TopicListHoc);
}