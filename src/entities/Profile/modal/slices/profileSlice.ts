import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { updateProfileData } from '../../services/updateProfileData/updateProfileData';
import { fetchProfileData } from '../../services/fetchProfileData/fetchProfileData';
import { Profile, ProfileSchema } from '../types/ProfileSchema';

const initialState: ProfileSchema = {
    isLoading: false,
    readonly: true,
    error: undefined,
    data: undefined,
    form: undefined,
};
export const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        setReadonly: (state, action: PayloadAction<boolean>) => {
            state.readonly = action.payload;
        },
        cancelEdit: (state) => {
            state.readonly = true;
            state.validateError = undefined;
            state.form = state.data;
        },
        updateProfileData: (state, action:PayloadAction<Profile>) => {
            state.form = {
                ...state.form,
                ...action.payload,
            };
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProfileData.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchProfileData.fulfilled, (state, action:PayloadAction<Profile>) => {
                state.data = action.payload;
                state.form = action.payload;
                state.isLoading = false;
            })
            .addCase(fetchProfileData.rejected, (state, action:any) => {
                state.isLoading = false;
                state.error = action.payload;
            })
            .addCase(updateProfileData.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(updateProfileData.fulfilled, (state, action:PayloadAction<Profile>) => {
                state.data = action.payload;
                state.form = action.payload;
                state.isLoading = false;
                state.readonly = true;
                state.validateError = undefined;
            })
            .addCase(updateProfileData.rejected, (state, action:any) => {
                state.isLoading = false;
                state.validateError = action.payload;
            });
    },

});

export const { actions: profileActions } = profileSlice;
export const { reducer: profileReducer } = profileSlice;
