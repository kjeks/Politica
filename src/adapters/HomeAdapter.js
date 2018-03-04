import Immutable from 'immutable';
import HomeMenu from '../domain/Home/HomeMenu';
import HomeMenuItem from '../domain/Home/HomeMenuItem';

export default {
    createHomeMenu(data) {
        let menuItemsMap = Immutable.Map();
        data.forEach(menuItem => {
            menuItemsMap = menuItemsMap.set(menuItem.id, new HomeMenuItem(menuItem));
        });
        return new HomeMenu({
            menuItems: menuItemsMap,
            selectedId: menuItemsMap.first().id
        });
    }
}