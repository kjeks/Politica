import React, {Component} from 'react';
import {connect} from 'react-redux';
import DiscussionActions from "./DiscussionActions";
import MainHeader from "../common/components/MainHeader";

class NewDiscussionContainer extends Component {
    render (){
        return(
            <div>
                <MainHeader title={'Create a new discussion'}/>
            </div>
        )
    }
}
function mapStateToProps (state) {
    return {}
}
function mapDispatchToProps (dispatch) {
    return {
        initialize: dispatch(DiscussionActions.initializeNewDiscussionPage())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewDiscussionContainer)

