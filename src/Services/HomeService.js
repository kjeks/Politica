import HomeAdapter from '../adapters/HomeAdapter';

export default {
    getContent(id) {
        return fetch('http://192.168.1.124:3001/api/homeContent/'+id)
            .then(response => response.json())
            .then((res) => {
                return HomeAdapter.createContent(res);
            });
    },
    getMenuItems() {
        return fetch('http://192.168.1.124:3001/api/homemenu')
            .then(response => response.json())
            .then((res) => {
                return HomeAdapter.createHomeMenu(res)
            });
    }
}