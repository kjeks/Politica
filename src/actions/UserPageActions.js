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
    userTopicChange: function (newValues) {
        return dispatch => {
            dispatch(this.userTopicChangeAction(newValues))
        }
    },
    userTopicChangeAction: function (newValues) {
        return {
            type: UserTypes.USER_TOPIC_CHANGED,
            newValues: newValues
        }
    }
}