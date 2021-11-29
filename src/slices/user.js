import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    user: false,
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        login: (state) => {
            state.user = true
        }
    }
})

export const { login } = userSlice.actions;

// export function loginUser() {
//     return (dispatch) => {
//         dispatch(login());
//     }
// }

export const userSelector = (state) => state.user;
export default userSlice.reducer;
