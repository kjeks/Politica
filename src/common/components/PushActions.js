export default {
    onMessageReceived: function () {

    },
    onUserAdded: function () {

    },
    populateUsersList: function (users) {
        return dispatch => dispatch({type: "POPULATE_USER_LIST", users: users});
    }
}