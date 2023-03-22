import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/StoreProvider';
import { Profile, validateProfileErrors } from 'entities/Profile/modal/types/ProfileSchema';
import { getProfileForm } from '../../modal/selector/getProfileForm/getProfileForm';
import { validateProfileData } from '../validateProfileData/validateProfileData';

export const updateProfileData = createAsyncThunk<Profile, void, ThunkConfig<validateProfileErrors[]> >(
    'profile/updateProfileData',
    async (_, thunkAPI) => {
        const { extra, rejectWithValue, getState } = thunkAPI;

        const formData = getProfileForm(getState());

        const errors = validateProfileData(formData);
        if (errors.length) {
            return rejectWithValue(errors);
        }
        try {
            const response = await extra.api.post<Profile>('/profile', formData);
            return response.data;
        } catch (error) {
            return rejectWithValue([validateProfileErrors.SERVER_ERROR]);
        }
    },
);
