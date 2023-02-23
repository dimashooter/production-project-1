import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { LoginByUsername } from '../services/LoginByUsername/LoginByUsername';
import { LoginSchema } from '../types/LoginSchema';

const initialState:LoginSchema = {
    isLoading: false,
    password: '',
    userName: '',
};
export const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        setUsername: (state, action: PayloadAction<string>) => {
            state.userName = action.payload;
        },
        setPassword: (state, action:PayloadAction<string>) => {
            state.password = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(LoginByUsername.pending, (state, action) => {
                state.error = undefined;
                state.isLoading = true;
            })

            .addCase(LoginByUsername.fulfilled, (state, action) => {
                state.isLoading = false;
            })
            .addCase(LoginByUsername.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },

});

export const { actions: LoginActions } = loginSlice;
export const { reducer: LoginReducer } = loginSlice;
