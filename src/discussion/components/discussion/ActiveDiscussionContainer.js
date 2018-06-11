import React, {Component} from 'react';
import {connect} from 'react-redux';
import CreateDiscussionActions from "../../CreateDiscussionActions";
import MainHeader from "../../../common/components/MainHeader";
import ActiveDiscussionChat from "./ActiveDiscussionChat";
import ActiveDiscussionMessage from "./ActiveDiscussionMessage";
import GiftedChat from 'react-native-gifted-chat';

class ActiveDiscussionContainer extends Component {
    constructor (props) {
        super(props);
        this.props.fetchDiscussion(this.props.match.params.id);

    }
    render () {
        return (
            <div>
                <MainHeader
                    title={this.props.activeDiscussionData.get('questionText')}
                    subCategory={this.props.activeDiscussionData.get('discussionName')}
                />
                <GiftedChat
                    messages={[{
                        _id: 1,
                        text: 'Hello developer',
                        createdAt: new Date(),
                        user: {
                            _id: 2,
                            name: 'React Native',
                            avatar: 'https://placeimg.com/140/140/any',
                        }}]}
                    user={{
                        _id: 1
                    }}
                />
                <ActiveDiscussionChat/>
                <ActiveDiscussionMessage/>
            </div>
        )
    }

}
function mapStateToProps (state) {
    return {
        activeDiscussionData: state.get('ActiveDiscussionReducer')
    }
}
function mapDispatchToProps (dispatch) {
    return {
        fetchDiscussion: (discussionId) => {dispatch(CreateDiscussionActions.fetchDiscussion(discussionId))}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ActiveDiscussionContainer);