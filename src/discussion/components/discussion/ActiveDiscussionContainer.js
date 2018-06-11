import React, {Component} from 'react';
import {connect} from 'react-redux';
import CreateDiscussionActions from "../../CreateDiscussionActions";
import MainHeader from "../../../common/components/MainHeader";
import ActiveDiscussionReducer from "../../ActiveDiscussionReducer";

class ActiveDiscussionContainer extends Component {
    constructor (props) {
        super(props);
        console.log(this.props, "props");
        this.props.fetchDiscussion(this.props.match.params.id);

    }
    render () {
        return (
            <div>
                <MainHeader title={'Create a new discussion'}/>
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