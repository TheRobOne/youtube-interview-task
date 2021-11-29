import { combineReducers } from '@reduxjs/toolkit';
import videosReducer from './videos';

const rootReducer = combineReducers({
    videos: videosReducer,
})

export default rootReducer;
