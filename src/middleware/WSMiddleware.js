import PushActions from "../common/components/PushActions";

let socket = null;
let userName = null;

export default store => next => action => {
    if (action.WS) {
        const socket = action.WS;
        if (socket === 'OPEN') {
            startSocket(store)
        }
        if (socket === 'SEND_MESSAGE') {
            sendMessage(action.message);
        }
    }
    return next(action);
}
function sendMessage (message) {
    socket.send(JSON.stringify({
        type: 'ADD_MESSAGE',
        message: message
    }))
}
function startSocket (store) {
    socket = new WebSocket('ws://localhost:8989');
    const state = store.getState();
    userName = state.getIn(['userReducer', 'name']);
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
                store.dispatch(PushActions.onMessageReceived(data.message));
                break;
            case 'ADD_USER':
                store.dispatch(PushActions.onUserAdded(data.name));
                break;
            case 'USERS_LIST':
                store.dispatch(PushActions.populateUsersList(data.users));
                break;
            default:
                break;
        }
    };
    return socket;
}