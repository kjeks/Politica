import React, {Component} from 'react';
import {connect} from 'react-redux';
import DiscussionActions from "./CreateDiscussionActions";
import MainHeader from "../common/components/MainHeader";
import TopicsList from "../common/components/TopicsList";

class CreateDiscussionContainer extends Component {
    render (){
        return(
            <div>
                <MainHeader title={'Create a new discussion'}/>
                <TopicsList
                    onTopicSelected={this.props.onTopicSelected}
                    selectedTopicId={this.props.selectedTopicId}
                />
            </div>
        )
    }
}
function mapStateToProps (state) {
    return {
        selectedTopicId: state.CreateDiscussionReducer.get('selectedTopicId')
    }
}
function mapDispatchToProps (dispatch) {
    return {
        onTopicSelected: (id) => dispatch(DiscussionActions.onTopicSelected(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateDiscussionContainer)

