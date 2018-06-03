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
                <TopicListComponent
                    favoriteTopics={this.props.favoriteTopics}
                    otherTopics={this.props.otherTopics}
                />
            );
        }
    }
    function mapStateToProps (state) {
        return {
            favoriteTopics: state.TopicListReducer.get('favoriteTopics'),
            otherTopics: state.TopicListReducer.get('otherTopics')
        }
    }
    function mapDispatchToProps (dispatch) {
        return {
            fetchTopicLists: (userId) => dispatch(CommonActions.fetchTopicList(userId))}
        }

    return connect(mapStateToProps, mapDispatchToProps)(TopicListHoc);
}