import {combineReducers} from 'redux';
import HomeMenuReducer from '../home/HomeMenuReducer';
import HomeContentReducer from '../home/HomeContentReducer';
import UserReducer from '../user/UserReducer';
import TopicListReducer from '../common/TopicListReducer';

const politica = combineReducers({
    HomeMenuReducer,
    HomeContentReducer,
    UserReducer,
    TopicListReducer,
});

export default politica;
