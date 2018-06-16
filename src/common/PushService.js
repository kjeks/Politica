import PushActions from "./components/PushActions";

export default {
    startSocket: function (dispatch, userName) {
        const socket = new WebSocket('ws://localhost:8989');

        socket.onopen = () => {
            socket.send(JSON.stringify({
                type: 'ADD_USER',
                name: userName
            }));
        };
        socket.onmessage = (event) => {
            const data = JSON.parse(event.data);
            switch (data.type) {
                case 'ADD_MESSAGE':
                    dispatch(PushActions.onMessageReceived(data.message));
                    break;
                case 'ADD_USER':
                    dispatch(PushActions.onUserAdded(data.name));
                    break;
                case 'USERS_LIST':
                    dispatch(PushActions.populateUsersList(data.users));
                    break;
                default:
                    break;
            }
        };
        return socket;
    }
}