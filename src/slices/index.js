import { combineReducers } from '@reduxjs/toolkit';
import videosReducer from './videos';
import userReducer from './user';

const rootReducer = combineReducers({
    videos: videosReducer,
    user: userReducer,
})

export default rootReducer;
