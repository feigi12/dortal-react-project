import { createSlice } from '@reduxjs/toolkit';
const userSlice = createSlice({
    name: 'user',
    initialState: {
        name: 'חיים משה',
        userName:'',
        password:'',
        id: '206779373',
        insuranceAgent:123456,
    },
    reducers: {
        login: (state, action) => {
            state.userName = action.payload.userName;
            state.password = action.payload.password;
        },
        clearUser: (state) => {
            state.name = '';
            state.id = '';
            state.password = '';
        }
    }
});

export const { clearUser, login } = userSlice.actions;
export default userSlice.reducer;
