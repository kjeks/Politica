import CommonConstants from "../common/CommonConstants";

export default {
    createNewDiscussion: (config) => {
        return fetch(`${CommonConstants.serverUrl}/discussions/new`, {
            body: JSON.stringify(config),
            headers: {'content-type': 'application/json'},
            method: 'POST'
        })
            .then(response => response.json())
    },
    fetchDiscussion: (id) => {
        return fetch(`${CommonConstants.serverUrl}/discussions/${id}`).then(response => response.json())
    }
}