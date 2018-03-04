import Immutable from 'immutable';
import HomeMenu from '../domain/Home/HomeMenu';
import HomeMenuItem from '../domain/Home/HomeMenuItem';
import HomeContent from '../domain/Home/HomeContent';

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
    },
    createContent(data) {
        return new HomeContent({text: data.text})
    }
}