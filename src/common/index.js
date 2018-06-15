import {combineReducers} from 'redux-immutable';
import HomeMenuReducer from '../home/HomeMenuReducer';
import HomeContentReducer from '../home/HomeContentReducer';
import UserReducer from '../user/UserReducer';
import TopicListReducer from '../common/TopicListReducer';
import CreateDiscussionReducer from '../discussion/CreateDiscussionReducer';
import ActiveDiscussionReducer from '../discussion/components/active_discussion/ActiveDiscussionReducer';

const politica = combineReducers({
    HomeMenuReducer: HomeMenuReducer,
    HomeContentReducer: HomeContentReducer,
    UserReducer: UserReducer,
    TopicListReducer: TopicListReducer,
    CreateDiscussionReducer: CreateDiscussionReducer,
    ActiveDiscussionReducer: ActiveDiscussionReducer,
});

export default politica;
