import Immutable from 'immutable';

const UserRecord = Immutable.Record({
    name: null,
    initialName: null,
    topics: null
});

export default class User extends UserRecord {
    constructor(props){
        super({
            initialName: props.name,
            name: props.name,
            topics: props.topics
        });
    }
    isNameChanged() {
        return this.name !== this.initialName;
    }
    restoreInitialValues () {
        const restoredTopics = this.topics.map((topic) => {
            return topic.set('selected', topic.initialSelected)
        });
        return this.set('name', this.initialName).this.set('topics', restoredTopics);
    }
    saveChanges() {
        return this.set('initialName', this.name).set('initialTopics', this.topics);
    }
}