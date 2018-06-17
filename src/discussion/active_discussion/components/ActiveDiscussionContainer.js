import React, {Component} from 'react';
import {connect} from 'react-redux';
import CreateDiscussionActions from "../../create_discussion/CreateDiscussionActions";
import MainHeader from "../../../common/components/MainHeader";
import ActiveDiscussionChat from "./ActiveDiscussionChat";
import ActiveDiscussionMessage from "./ActiveDiscussionNewMessage";

class ActiveDiscussionContainer extends Component {
    constructor (props) {
        super(props);
        this.props.fetchDiscussion(this.props.match.params.id);

    }
    onMessageSent = (message) => {
        this.props.onMessageSent(message, this.props.userName);
    };

    render () {
        return (
            <div className='chat'>
                <MainHeader
                    title={this.props.activeDiscussionData.get('questionText')}
                    subCategory={this.props.activeDiscussionData.get('discussionName')}
                />
                <ActiveDiscussionChat messages={this.props.activeDiscussionData.get('messages')}/>
                <ActiveDiscussionMessage onMessageSent={this.onMessageSent}/>
            </div>
        )
    }

}
function mapStateToProps (state) {
    return {
        activeDiscussionData: state.get('ActiveDiscussionReducer'),
        userName: state.getIn(['UserReducer', 'userName'])
    }
}
function mapDispatchToProps (dispatch) {
    return {
        fetchDiscussion: (discussionId) => dispatch(CreateDiscussionActions.fetchDiscussion(discussionId)),
        onMessageSent: (message, userName) => dispatch(CreateDiscussionActions.onMessageSent(message, userName))

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ActiveDiscussionContainer);