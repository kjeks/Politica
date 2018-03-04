import Immutable from 'immutable';

const HomeMenuItemRecord = Immutable.Record({
    name: null,
    id: null,
    text: null
});

export default class HomeMenuItem extends HomeMenuItemRecord {

}