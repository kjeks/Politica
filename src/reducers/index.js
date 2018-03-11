import {combineReducers} from 'redux';
import HomeMenuReducer from './home/HomeMenuReducer';
import HomeContentReducer from './home/HomeContentReducer';
import UserReducer from './user/UserReducer';

const politica = combineReducers({
    HomeMenuReducer,
    HomeContentReducer,
    UserReducer
});

export default politica;
