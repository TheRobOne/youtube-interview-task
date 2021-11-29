import reducer, { getVideosSuccess } from './videos';

const initialState = {
    isLoading: false,
    hasError: false,
    videos: [],
};

test('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
})

test('should handle fetching data', () => {
    const videos = [
        {id: 1},
        {id: 2}
    ]
    expect(reducer(undefined, getVideosSuccess(videos))).toEqual({
        isLoading: false,
        hasError: false,
        videos: videos,
    });
})
