import Immutable from 'immutable';

const UserRecord = Immutable.Record({
    name: null,
    initialName: null,
    initialTopics: null,
    topics: null
});

export default class User extends UserRecord {
    constructor(props){
        super({
            initialName: props.name,
            name: props.name,
            initialTopics: props.topics,
            topics: props.topics
        });
    }
    isNameChanged() {
        return this.name !== this.initialName;
    }
}