import {combineReducers} from 'redux';
import HomeMenuReducer from './home/HomeMenuReducer';
import HomeContentReducer from './home/HomeContentReducer'

const politica = combineReducers({
    HomeMenuReducer,
    HomeContentReducer
});

export default politica;
