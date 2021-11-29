import axios from 'axios';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isLoading: false,
    hasError: false,
    videos: [],
};

const videosSlice = createSlice({
    name: 'videos',
    initialState,
    reducers: {
        getVideos: (state) => {
            state.isLoading = true
        },
        getVideosSuccess: (state, action) => {
            state.videos = action.payload
            state.isLoading = false
            state.hasError = false
        },
        getVideosFailure: (state) => {
            state.isLoading = false
            state.hasError = true
        }
    }
})

export const { getVideos, getVideosSuccess, getVideosFailure } = videosSlice.actions;

export function fetchVideos(text) {
    return async (dispatch) => {
        dispatch(getVideos());

        try {
            // I am aware that it isn't secure way for passing the api key. Normally I would use some bff to hide the key and also restrict the key for the specific domain
            const url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${text}&key=${process.env.REACT_APP_API_KEY}`;
            const response = await axios.get(url);

            dispatch(getVideosSuccess(response.data?.items));
        } catch (error) {
            dispatch(getVideosFailure());
        }
    }
}

export const videosSelector = (state) => state.videos;
export default videosSlice.reducer;
