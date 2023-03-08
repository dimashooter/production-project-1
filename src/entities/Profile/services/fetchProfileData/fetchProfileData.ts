import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/StoreProvider';
import { Profile } from 'entities/Profile/modal/types/ProfileSchema';
import { User, userActions } from 'entities/User';
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localstorage';

export const fetchProfileData = createAsyncThunk<Profile, void, ThunkConfig<string> >(
    'profile/fetchProfileData',
    async (_, thunkAPI) => {
        const { extra, dispatch, rejectWithValue } = thunkAPI;
        try {
            const response = await extra.api.get<Profile>('/profile');

            return response.data;
        } catch (error) {
            return rejectWithValue('authorization error');
        }
    },
);
