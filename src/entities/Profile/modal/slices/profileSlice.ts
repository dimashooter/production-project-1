import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchProfileData } from '../../services/fetchProfileData/fetchProfileData';
import { Profile, ProfileSchema } from '../types/ProfileSchema';

const initialState: ProfileSchema = {
    isLoading: false,
    readonly: true,
    error: undefined,
    data: undefined,
};
export const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProfileData.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchProfileData.fulfilled, (state, action:PayloadAction<Profile>) => {
                state.data = action.payload;
                state.isLoading = false;
            })
            .addCase(fetchProfileData.rejected, (state, action:any) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },

});

export const { actions: profileActions } = profileSlice;
export const { reducer: profileReducer } = profileSlice;
