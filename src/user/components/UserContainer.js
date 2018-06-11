import React, {Component} from 'react';
import {connect} from 'react-redux';
import UserPage from './UserPage';
import UserPageActions from "../UserPageActions";

class UserContainer extends Component {
    componentWillMount = () => {
        this.props.initialize();
    };
    render () {
        const {userValueChange, userTopicChange, saveChanges, cancelChanges, user} = this.props;
        return <UserPage
            userValueChange={userValueChange}
            saveChanges={saveChanges}
            userTopicChange={userTopicChange}
            cancelChanges={cancelChanges}
            user={user}
        />
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        userValueChange: (newValue, changedField) => dispatch(
            UserPageActions.userValueChange(newValue, changedField)
        ),
        userTopicChange: (name) => dispatch (
            UserPageActions.userTopicChange(name)
        ),
        saveChanges: (user) => dispatch (
            UserPageActions.userSaveChanges(user)
        ),
        cancelChanges: () => dispatch(
            UserPageActions.userCancelChanges()
        ),
        initialize: () => dispatch(
            UserPageActions.initialize()
        )
    }
};
const mapStateToProps = state => {
    return {
        user: state.get('UserReducer')
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);