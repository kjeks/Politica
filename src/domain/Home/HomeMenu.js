import Immutable from 'immutable';

const HomeMenuRecord = Immutable.Record({
    menuItems: null,
    selectedId: null
});

export default class HomeMenu extends HomeMenuRecord {

}