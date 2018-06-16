export default {
    onMessageReceived: function (message) {
        return dispatch => dispatch({type: 'PUSH_MESSAGE_RECEIVED', message: message})
    },
    onUserAdded: function () {

    },
    populateUsersList: function (users) {
        return dispatch => dispatch({type: "POPULATE_USER_LIST", users: users});
    }
}