import UserTypes from "../constants/actionTypes/UserTypes";
import UserService from "../Services/UserService";

export default  {
    initializeAction: function (user) {
        return {
            type: UserTypes.USER_INITIALIZED,
            user: user
        }
    },
    initialize: function () {
        return dispatch => {
            UserService.getUser().then((user) => {
                dispatch(this.initializeAction(user));
            });
        }
    },
    userValueChangeAction: function (newValue, changedField) {
        return {
            type: UserTypes.USER_VALUE_CHANGED,
            newValue: newValue,
            changedField: changedField
        }
    },
    userValueChange: function (newValue, changedField) {
        return dispatch => {
            dispatch(this.userValueChangeAction(newValue, changedField));
        }
    },
    userTopicChange: function (name) {
        return dispatch => {
            dispatch(this.userTopicChangeAction(name))
        }
    },
    userTopicChangeAction: function (name) {
        return {
            type: UserTypes.USER_TOPIC_CHANGED,
            name: name
        }
    },
    userSaveChanges: function (user) {
        return dispatch => {
            UserService.saveUser(user).then(dispatch(this.userSaveChangesAction()));
        }
    },
    userSaveChangesAction: function () {
        return {
            type: UserTypes.USER_SAVE_CHANGES
        }
    },
    userCancelChanges: function () {
        return dispatch => {
            dispatch(this.userCancelChangesAction())
        }
    },
    userCancelChangesAction: function () {
        return {
            type: UserTypes.USER_CANCEL_CHANGES
        }
    }
}