import UserTypes from "./UserTypes";
import UserService from "./UserService";

export default  {
    initialize: function () {
        return dispatch => {
            UserService.getUser().then((user) => {
                dispatch({type: UserTypes.USER_INITIALIZED, user: user});
            });
        }
    },
    userValueChange: function (newValue, changedField) {
        return dispatch => {
            dispatch({
                type: UserTypes.USER_VALUE_CHANGED,
                newValue: newValue,
                changedField: changedField
            });
        }
    },
    userTopicChange: function (name) {
        return dispatch => {
            dispatch({
                type: UserTypes.USER_TOPIC_CHANGED,
                name: name
            })
        }
    },
    userSaveChanges: function (user) {
        return dispatch => {
            UserService.saveUser(user).then(dispatch({type: UserTypes.USER_SAVE_CHANGES}));
        }
    },

    userCancelChanges: function () {
        return dispatch => {
            dispatch({type: UserTypes.USER_CANCEL_CHANGES})
        }
    }
}