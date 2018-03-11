import User from '../domain/user/User';
import Immutable from 'immutable';
export default {
    createUser(data) {
        return new User({name: data.name, topics: Immutable.List(data.topics)});
    }
}