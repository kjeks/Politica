import Immutable from 'immutable';

const TopicRecord = Immutable.Record({
    name: null,
    selected: null,
    initialSelected: null
});

export default class Topic extends TopicRecord {
    saveChanges () {
        return this.set('initialSelected', this.selected);
    }
    hasChanged () {
        return this.initialSelected !== this.selected;
    }
};