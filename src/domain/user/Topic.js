import Immutable from 'immutable';

const TopicRecord = Immutable.Record({
    name: null,
    selected: null,
    initialSelected: null
});

export default class Topic extends TopicRecord {};