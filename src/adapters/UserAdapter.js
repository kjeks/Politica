import User from '../domain/user/User';
import Immutable from 'immutable';
import Topic from "../domain/user/Topic";
export default {
    createUser(data) {
        let topics = Immutable.Map();
        data.topics.forEach((topic)=> {
            topics = topics.set(topic.name, new Topic({id: topic.id, name: topic.name, selected: topic.selected, initialSelected: topic.selected}));
        });
        return new User({name: data.name, id: data.id, topics: topics});
    },
    createUserResponse(user) {
        let topicList = [];

        user.topics.forEach(topic => {
            topic.selected && topicList.push(topic.id)
        });

        return {name: user.name, id: user.id, selectedTopics: topicList}
    }
}